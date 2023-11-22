import transactionService from "../services/transactionService.js";

async function create(req, res) {
    const body = req.body;
    const id = "655e1f785a28efdaca9aef3f";

    try {
        const transaction = await transactionService.create(body, id);
        return res.status(201).send(transaction);
    } catch (error) {
        return res.status(409).send(error.message);
    }

};

export default { create };