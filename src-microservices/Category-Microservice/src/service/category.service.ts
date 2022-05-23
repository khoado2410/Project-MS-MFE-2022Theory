import {DocumentDefinition, FilterQuery} from 'mongoose';
import Category, {CategoryDocument} from '../model/category.model';
import {findBranchByName} from './branch.service';
import Branch from '../model/branch.model';

export async function findCategoryByName(input: any){
    try {
        return await Category.findOne(input);
    } catch (error) {
        throw error;
    }
}

export async function createCategory(input: any){
    try {
        
    } catch (error) {
        throw error;
    }
}

export async function getCategory(){
    try {
        return  await Category.find({is_delete: false}).select({
            is_delete: 0
        });
    } catch (error) {
        throw error;
    }
}

export async function getCategoryByBranch(input: FilterQuery<CategoryDocument>){
    try {
        const query = {...input};
        input.is_delete = false;
        return await Category.find(query).select({
            is_delete: 0
        });
    } catch (error) {
        throw error;
    }
}


// export async function getAllProduct(){
//     try {
//         // query.expire = true;
//         const listProduct = await Product.find({is_delete: false}).select({
//             is_delete: 0
//         });
//         return listProduct;
//     } catch (error) {
//         throw error;
//     }
// }

