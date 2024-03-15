import { Schema, model } from "mongoose";
import { TProduct } from "../Interfaces/Product.interface";

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  }
});


export const ProductModel = model<TProduct>('product', productSchema);
