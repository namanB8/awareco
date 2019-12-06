import mongoose from "mongoose";
import { UserDocument } from "./User";
import { TransactionDocument } from "./Transaction";

export type ActivityDocument = mongoose.Document & {
    user: UserDocument,
    activityType: string,
    distanceCovered: number,
    transaction: TransactionDocument
};

const activitySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    activityType: { type: String, enum: ['Walking', 'Driving'] },
    distanceCovered: Number,
    transaction: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
}, { timestamps: true });

export const Activity = mongoose.model<ActivityDocument>("Activity", activitySchema);
