import mongoose from "mongoose";

export interface BillDocument extends mongoose.Document{
   infoCustomer: Object,
   listBill: Array<Object>,
   total: Number,
   dateCreated: Date,
   status: Number,
   typeOfPaymentMethod: String
}

const BillSchema = new mongoose.Schema(
    {
        infoCustomer: {type: Object, required: true},
        listBill: {type: Array, required: true},
        total: {type: Number, required: true},
        dateCreated: {type: Date, required: true, default: Date.now()},
        status: {type: Number},
        typeOfPaymentMethod: {type: String}
    }   
);

const Bill = mongoose.model<BillDocument>('Bill', BillSchema);

export default Bill;

