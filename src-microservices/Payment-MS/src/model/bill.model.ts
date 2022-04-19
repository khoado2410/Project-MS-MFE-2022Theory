import mongoose from "mongoose";

export interface BillDocument extends mongoose.Document{
   billNumber: String,
   infoCustomer: Object,
   listBill: Object,
   total: Number,
   dateCreated: Date,
   status: Number,
   typeOfPaymentMethod: String
}

const BillSchema = new mongoose.Schema(
    {
        billNumber: {type: String, required: true, unique: true},
        infoCustomer: {type: Object, required: true},
        listBill: {type: Object, required: true},
        total: {type: Number, required: true},
        dateCreated: {type: Date, required: true, default: Date.now()},
        status: {type: Number},
        typeOfPaymentMethod: {type: String}
    }   
);

const Bill = mongoose.model<BillDocument>('Bill', BillSchema);

export default Bill;

