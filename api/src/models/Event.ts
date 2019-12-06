import mongoose from "mongoose";

export type EventDocument = mongoose.Document & {
    name: string,
    description: string,
    date: string,
};

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
}, { timestamps: true });

export const Event = mongoose.model<EventDocument>("Event", eventSchema);
