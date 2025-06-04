import mongoose from "mongoose";

const { Schema } = mongoose;

const billingSchema = Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required: true,
        lowercase: true,

    },
    address: {
        type: String,
        required: true,
        lowercase: true,

    },
    country: {
        type: String,
        required: true,
        lowercase: true,

    },
    city: {
        type: String,
        required: true,
        lowercase: true,

    },
    zipCode: {
        type: String,
        required: true,
        lowercase: true,

    },
    serviceName: {
        type: String,
        required: true,
        lowercase: true,

    },
    price: {
        type: String,
        required: true,
        lowercase: true,

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