import {DocumentDefinition, FilterQuery} from 'mongoose';
import Bill, {BillDocument} from '../model/bill.model';

export async function createBill(input: DocumentDefinition<BillDocument>){
    try {
        return await Bill.create(input);
    } catch (error) {
        throw error;
    }
}

export async function getBill(query: FilterQuery<BillDocument>){
    try {
        // query.expire = true;
        // const listPromotion = await Promotion.findOne(query).sort("-discount");
        // return listPromotion;
    } catch (error) {
        throw error;
    }
}

