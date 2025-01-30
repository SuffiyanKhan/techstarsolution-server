import db from '../module/index.js';

const {billing:Billing}=db;
const saveBillingDataSevices=async(payload)=>{
    try {
        const reponse = await Billing({...payload});
        return reponse.save();
    } catch (error) {
        throw error;
    }
}

const getAllBillingDataServices=async()=>{
    try {
        const response =await Billing.find({});
        return response
    } catch (error) {
        throw error;
    }
}

export{
    saveBillingDataSevices,
    getAllBillingDataServices
}