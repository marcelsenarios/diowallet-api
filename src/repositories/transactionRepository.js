import TransactionSchema from '../schemas/Transaction.js';

async function create(data) {
    return TransactionSchema.create(data);
};

async function findAllByUser(id) {
    console.log("Entrou aqui Repository");
    const retorno = await TransactionSchema.find({userId: id});
    console.log("RETORNO: ",retorno);
    return retorno;
};

export default { create, findAllByUser };