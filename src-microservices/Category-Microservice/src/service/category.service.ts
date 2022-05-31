import {DocumentDefinition, FilterQuery} from 'mongoose';
import Category, {CategoryDocument} from '../model/category.model';


export async function findCategoryByName(input: any){
    try {
        return await Category.findOne(input);
    } catch (error) {
        throw error;
    }
}

export async function createCategory(input: any){
    try {
        const checkCategory = await findCategoryByName({
            name: input.category,
            is_delete: false
        });
        if(checkCategory){
            const listCategoryDetail = checkCategory.category_detail;
            if(!listCategoryDetail.includes(input.category_detail) && input.category_detail != ''){
                 await Category.updateOne({
                    name: input.category,
                    is_delete: false
                }, {
                        $push: {
                            category_detail: input.category_detail
                        }
                });
            }
           
        }else{
            if(input.category_detail == ''){
                await Category.create({
                    name: input.category,
                    categoryDetail: []
                });
            }else{
                await Category.create({
                    name: input.category,
                    category_detail: [input.category_detail]
                });
            }
            
        }
        return true;
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

export async function checkCategoryValid(input: any){
    try {
        const query = {
            name: input.category,
            is_delete: false
        }; 
        const checkCategory = await findCategoryByName(query);
        
        if(checkCategory){
            const listCategoryDetail = checkCategory.category_detail;
            if(input.category_detail != ''){
                if(listCategoryDetail.includes(input.category_detail))
                    return true
                else
                    return false
            }
            return true
        }else{
            return false;
        }

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

