import mongoose from "mongoose";
import { UserDocument } from "./User";
import { TransactionDocument } from "./Transaction";

export type DonationDocument = mongoose.Document & {
    user: UserDocument,
    amount: number,
    transaction: TransactionDocument
};

const donationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: Number,
    transaction: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
}, { timestamps: true });

export const Donation = mongoose.model<DonationDocument>("Donation", donationSchema);
