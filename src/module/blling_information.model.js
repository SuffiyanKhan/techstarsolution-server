import mongoose from "mongoose";

const { Schema } = mongoose;

const billingSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    zipcode: {
        type: String,
        require: true
    },
    serviceName: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    payment: {
        type: Boolean,
        default: false
    }

}, { timeStamp: true });

const billingModel = mongoose.model("billing", billingSchema);

export default billingModel