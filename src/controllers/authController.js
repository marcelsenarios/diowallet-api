import authService from "../services/authService.js";

async function signup(req, res) {
    const body = req.body;

    try {
        const resService = await authService.signup(body);
        return res.send(resService);
    } catch (error) {
        return res.status(409).send(error.message);
    }

};

async function signin(req, res) {
    const body = req.body;

    try {
        const token = await authService.signin(body);
        return res.send(token);
    } catch (error) {
        return res.status(401).send(error.message);
    }
};

async function userLogged(req, res) {
    const {_id: id} = res.locals.user;

    try {
        const user = await authService.userLogged(id);
        return res.send(user);
    } catch (error) {
        return res.status(401).send(error.message);
    }
};

export default { signup, signin, userLogged };