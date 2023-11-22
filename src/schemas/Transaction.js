import { Schema, model } from "mongoose";

const TransactionSchema = new Schema({
    value: {type: Number, required: true},
    description: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, required: true, ref: "users"},
    type: {type: String, required: true},
    created_at: {type: Date, default: Date.now()},
});

export default model("transactions", TransactionSchema);