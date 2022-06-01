import mongoose from "mongoose";

export interface ProductDocument extends mongoose.Document{
    name: String,
    description: String,
    price: String,
    listImage: any[],
    numberOfReviews: Number;
    quantitySold: Number;
    category: String,
    categoryDetail: String,
    branch: String,
    numberStar: Number,
    comment: any[],
    created_by: String,
    created_date: Date,
    updated_by: String,
    updated_date: Date,
    is_delete: Boolean
}

const ProductSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        description: {type: String, default: null},
        price: {type: String, required: true},
        listImage: {type: Array, default: []},
        numberOfReviews: {type: Number, default: 0},
        quantitySold: {type: Number, default: 0},
        category: {type: String, required: true},
        categoryDetail: {type: String, default: null},
        branch: {type: String, default: null},
        numberStar: {type: Number, default: 0},
        comment: {type: Array, default: []},
        created_by: {type: String, default: ''},
        created_date: {type: Date, default: Date.now()},
        updated_by: {type: String, default: ''},
        updated_date: {type: Date, default: Date.now()},
        is_delete: {type: Boolean, default: false}
    }   
);

const Product = mongoose.model<ProductDocument>('products', ProductSchema);

export default Product;

