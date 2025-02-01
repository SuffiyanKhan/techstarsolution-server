
import db from '../module/index.js';

const { auth: Auth } = db;

const findByEmailService = async (email) => {
    try {
        const response = await Auth.findOne({ email });
        return response;
    } catch (error) {
        throw error;
    }
}

const signupService = async (payload) => {
    try {
        const response = Auth({ ...payload });
        return response.save()
    } catch (error) {
        throw error
    }
}

const getAllUsersDataServices=async()=>{
    try {
        const response = await Auth.find({}).exec();
        return response
    } catch (error) {
        throw error;
    }
}

const deleteUserServices=async(_id)=>{
    try {
        const response = await Auth.findByIdAndDelete({_id});
        return response
    } catch (error) {
        throw error;
    }
}

export {
    findByEmailService,
    signupService,
    getAllUsersDataServices,
    deleteUserServices
}