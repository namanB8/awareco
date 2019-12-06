import mongoose from "mongoose";

export type SystemDocument = mongoose.Document & {
    key: string,
    value: any,
};

const systemSchema = new mongoose.Schema({
  key: String,
  value: mongoose.Schema.Types.Mixed,
}, { timestamps: true });

export const System = mongoose.model<SystemDocument>("System", systemSchema);
