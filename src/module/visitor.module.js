import mongoose from 'mongoose';

const { Schema } = mongoose;

const visitorSchema = new Schema({
    ip: {
        type: String,
        default: null
    },
    country: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    location: Object,
    device: Object,
    event: {
        type: String,
        default: null
    },
    page: {
        type: String,
        default: null
    },
    referrer: {
        type: String,
        default: null
    },
    screenWidth: {
        type: Number,
        default: null
    },
    screenHeight: {
        type: Number,
        default: null
    },
    timestamp: {
        type: Date,
        default: null
    },
    notification: {
        type: Boolean,
        default: null
    }
}, { timestamps: true })

const visitorModule = mongoose.model('Visitor', visitorSchema);

export default visitorModule;