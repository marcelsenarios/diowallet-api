import jwt  from "jsonwebtoken";
import authRepository from "../repositories/authRepository.js";
import "dotenv/config";

export async function authMiddleware(req, res, next) {

    const {authorization} = req.headers;
    if(!authorization) return res.status(401).send({message: "Ivalid token [authorization]"});

    const parts = authorization?.split(" ");
    if(parts.length !== 2) return res.status(401).send({message: "Ivalid token [parts]"});

    const [schema, token] = parts;
    if(!/^Bearer$/i.test(schema)) return res.status(401).send({message: "Ivalid token [schema]"});

    jwt.verify(token, process.env.SECRET, async (error, decode) => {
        if(error) return res.status(401).send({message: "Ivalid token [error]"});
        if(!decode) return res.status(401).send({message: "Ivalid token [decode]"});

        const user = await authRepository.findById(decode.id);
        if(!user) return res.status(401).send({message: "Ivalid token [user]"});

        res.locals.user = user;

        next();
    });
}