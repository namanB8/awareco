import mongoose from "mongoose";
import { UserDocument } from "./User";
import { EventDocument } from "./Event";

export type UserEventDocument = mongoose.Document & {
    user: UserDocument,
    event: EventDocument
};

const userEventSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }
}, { timestamps: true });

export const UserEvent = mongoose.model<UserEventDocument>("UserEvent", userEventSchema);
