import mongoose from "mongoose";

export interface BillDocument extends mongoose.Document{
   username: String,
   infoCustomer: Object,
   listBill: Array<Object>,
   total: Number,
   dateCreated: Date,
   status: Number,
   typeOfPaymentMethod: String,
   isDelete: Number
}

const BillSchema = new mongoose.Schema(
    {
        username: {type: String, default: null},
        infoCustomer: {type: Object, required: true},
        listBill: {type: Array, required: true},
        total: {type: Number, required: true},
        dateCreated: {type: Date, required: true, default: Date.now()},
        status: {type: Number},
        typeOfPaymentMethod: {type: String},
        isDelete: {type: Number, default: 0}
    }   
);

const Bill = mongoose.model<BillDocument>('Bill', BillSchema);

export default Bill;

