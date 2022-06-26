import {DocumentDefinition, FilterQuery} from 'mongoose';
import Bill, {BillDocument} from '../model/bill.model';

export async function createBill(input: any){
    try {
        return await Bill.create(input);
    } catch (error) {
        throw error;
    }
}

export async function getBill(query: any){
    try {
        const listBill = await Bill.find({
            idCustomer: query.id_customer,
            isDelete: 0
        });
        return listBill;
    } catch (error) {
        throw error;
    }
}

