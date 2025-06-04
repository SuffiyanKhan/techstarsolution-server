import mongoose from "mongoose";

const { Schema } = mongoose;

const billingSchema = Schema({
    name: {
        type: String,
        required: true,
        set: (v) => v.trim().toLowerCase()
    },
    email: {
        type: String,
        required: true,
        set: (v) => v.trim().toLowerCase()
    },
    phone: {
        type: String,
        required: true,
        set: (v) => v.trim().toLowerCase()
    },
    address: {
        type: String,
        required: true,
        set: (v) => v.trim().toLowerCase()
    },
    country: {
        type: String,
        required: true,
        set: (v) => v.trim().toLowerCase()
    },
    city: {
        type: String,
        required: true,
        set: (v) => v.trim().toLowerCase()
    },
    zipcode: {
        type: String,
        required: true,
        set: (v) => v.trim().toLowerCase()
    },
    serviceName: {
        type: String,
        required: true,
        set: (v) => v.trim().toLowerCase()
    },
    price: {
        type: String,
        required: true,
        set: (v) => v.trim().toLowerCase()
    },
    payment: {
        type: Boolean,
        default: false
    },
    currency: {
        type: String,
        default: "AED",
        set: (v) => v.trim().toUpperCase()
    }

}, { timeStamp: true });

const billingModel = mongoose.model("billing", billingSchema);

export default billingModel