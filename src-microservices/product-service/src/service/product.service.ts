import {DocumentDefinition, FilterQuery} from 'mongoose';
import Product, {ProductDocument} from '../model/product.model';
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.NODE_DOCKER_PORT;

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
            isDelete: 0
        });
        const listRes: Array<Object> = [];
        listProduct.forEach(item => {
            let listPath: Array<String> = [];
            item.listImage.forEach(image => {
                listPath.push(`localhost:3333/product/upload/${image.filename}`);
            });
            let itemProduct = {
                id: item._id,
                name: item.name,
                description: item.description,
                price: item.price,
                numberOfReviews: item.numberOfReviews,
                quantitySold: item.quantitySold,
                category: item.category,
                branch: item.branch,
                numberStar: item.numberStar,
                linkPath: listPath
            };
            listRes.push(itemProduct);
        })
        return listRes;
    } catch (error) {
        throw error;
    }
}

