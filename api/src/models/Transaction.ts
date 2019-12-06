import mongoose from "mongoose";
import { UserDocument } from "./User";

export type TransactionDocument = mongoose.Document & {
    user: UserDocument,
    type: string,
    credits: number
};

const transactionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
    type: { type: String, enum: ['Activity', 'Donation']},
    credits: Number
}, { timestamps: true });

export const Transaction = mongoose.model<TransactionDocument>("Transaction", transactionSchema);
