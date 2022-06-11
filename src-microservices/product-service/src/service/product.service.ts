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
            // let itemProduct = {
            //     id: item._id,
            //     name: item.name,
            //     description: item.description,
            //     price: item.price,
            //     numberOfReviews: item.numberOfReviews,
            //     quantitySold: item.quantitySold,
            //     category: item.category,
            //     branch: item.branch,
            //     numberStar: item.numberStar,
            //     linkPath: Array<String>,
            // };
            // let listPath = [
            //     {
            //         filename: String
            //     }
            // ];
            // item.listImage.forEach(image => {
            //     //listPath.push({filename: `localhost:${port}/upload/${image.filename}`});
            // })
            //item.listImage = listPath;
            console.log('item: ', item);
            //listRes.push(itemProduct);
        })
        console.log('list res: ', listRes);
        return listProduct;
    } catch (error) {
        throw error;
    }
}

