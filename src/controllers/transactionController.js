import transactionService from "../services/transactionService.js";

async function create(req, res) {
    const body = req.body;
    const {_id: id} = res.locals.user;

    try {
        const transaction = await transactionService.create(body, id);
        return res.status(201).send(transaction);
    } catch (error) {
        return res.status(409).send(error.message);
    }

};

async function findAllByUser(req, res) {
    console.log("res.locals: ", res.locals);
    const {_id: id} = res.locals.user;

    console.log("Entrou aqui Controller");
    try {
        const transactions = await transactionService.findAllByUser(id);
        return res.send(transactions);
    } catch (error) {
        console.log("res.locals.user: ",res.locals.user);
        console.log("ID: ",id);
        return res.status(500).send(error.message);
    }
}

export default { create, findAllByUser};