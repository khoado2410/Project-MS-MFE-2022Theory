import {DocumentDefinition, FilterQuery} from 'mongoose';
import Product, {ProductDocument} from '../model/product.model';

export async function createProduct(input: DocumentDefinition<ProductDocument>){
    try {
        return await Product.create(input);
    } catch (error) {
        throw error;
    }
}



export async function getAllProduct(){
    try {
        // query.expire = true;
        const listProduct = await Product.find({is_delete: false}).select({
            is_delete: 0
        });
        return listProduct;
    } catch (error) {
        throw error;
    }
}

