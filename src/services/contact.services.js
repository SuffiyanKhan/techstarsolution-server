import db from '../module/index.js';
const {contact:Contact}=db;

const saveContactFormDataService=async(payload)=>{
try {
    const response = await Contact({...payload});
    return response.save();
} catch (error) {
    throw error;
}
}

const getAllDataServices=async()=>{
    try {
        const response = await Contact.find({}).exec();
        return response
    } catch (error) {
        throw error;
    }
}

export{
    saveContactFormDataService,
    getAllDataServices
}