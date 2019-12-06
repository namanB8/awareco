import mongoose from "mongoose";

export type ProductDocument = mongoose.Document & {
    name: string,
    price: number,
};

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
}, { timestamps: true });

export const Product = mongoose.model<ProductDocument>("Product", productSchema);
