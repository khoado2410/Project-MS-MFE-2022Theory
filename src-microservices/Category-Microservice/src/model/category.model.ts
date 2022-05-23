import mongoose from "mongoose";

export interface CategoryDocument extends mongoose.Document{
    name: String,
    is_delete: Boolean,
    categoryDetail: any[],
    created_by: String,
    created_date: Date,
    updated_by: String,
    updated_date: Date,
}

const CategorySchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        categoryDetail: {type: Array, default: []},
        is_delete: {type: Boolean, default: false},
        created_by: {type: String, default: ''},
        created_date: {type: Date, default: Date.now()},
        updated_by: {type: String, default: ''},
        updated_date: {type: Date, default: Date.now()},
    }   
);

const Category = mongoose.model<CategoryDocument>('category', CategorySchema);

export default Category;

