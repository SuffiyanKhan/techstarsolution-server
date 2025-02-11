import db from '../module/index.js';

const {accesstopartners:AccessToOthers}=db;

 export const addDataOfAccessPartnersServices=async(payload)=>{
    try {
        const response =await AccessToOthers({...payload});
        return response.save();
    } catch (error) {
        throw error;
    }
}


export const getAllDataServices=async()=>{
    try {
        const response = await AccessToOthers.find({}).exec();
        return response
    } catch (error) {
        throw error;
    }
}

export const findByEmailAccessPartnersServices=async(email)=>{
    try {
        const response = await AccessToOthers.findOne({email}).exec();
        return response;
    } catch (error) {
        throw error;
    }
}