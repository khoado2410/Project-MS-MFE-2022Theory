import mongoose from "mongoose";

export interface PaymentMethodDocument extends mongoose.Document{
  idPayment: Number,
  typeOfPaymentMethod: String
}

const PaymentSchema = new mongoose.Schema(
    {
        idPayment: {type: String, required: true, unique: true},
        typeOfPaymentMethod: {type: String, required: true},
       
    }   
);

const PaymentMethod = mongoose.model<PaymentMethodDocument>('PaymentMethod', PaymentSchema);

export default PaymentMethod;

