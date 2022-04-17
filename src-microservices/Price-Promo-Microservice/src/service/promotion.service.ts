import {DocumentDefinition, FilterQuery} from 'mongoose';
import Promotion, {PromotionDocument} from './../model/promotion.model';

export async function createPromotion(input: DocumentDefinition<PromotionDocument>){
    try {
        return await Promotion.create(input);
    } catch (error) {
        throw error;
    }
}

export async function getPromotionByTypeProduct(query: FilterQuery<PromotionDocument>){
    try {
        query.expire = true;
        const listPromotion = await Promotion.findOne(query).sort('-discount');
        return listPromotion;
    } catch (error) {
        throw error;
    }
}

export async function getPromotionByProduct(query: FilterQuery<PromotionDocument>){
    try {
        const promoByProduct = await Promotion.findOne({
            listProduct: query.productId,
            expire: true
        }).sort("-discount").exec();
        const promoByType = await Promotion.findOne({
            typeProduct: query.productId,
            expire: true
        }).sort("-discount");
        if(!promoByProduct && promoByType)
            return promoByType
        if(promoByProduct && !promoByType)
            return promoByProduct
        if((promoByProduct != null && promoByType != null) && promoByProduct.discount > promoByType.discount)
            return promoByProduct;
        else
            return promoByType;
    } catch (error) {
        throw error;
    }
}

export async function updateProduct(input: DocumentDefinition<PromotionDocument>){
    try {
        const updatePromotion = await Promotion.updateOne({
            name: input.name,
            expire: true
        }, input);
        return updatePromotion;
    } catch (error) {
        throw error;
    }
}

export async function removeProduct(input: DocumentDefinition<PromotionDocument>){
    try {
        const updatePromotion = await Promotion.updateOne({
            name: input.name,
            expire: true
        }, {
            expire: false
        });
        return updatePromotion;
    } catch (error) {
        throw error;
    }
}
