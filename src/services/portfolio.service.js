import db from '../module/index.js';


const {portfolio:Portfolio}=db;

export const addPortfolioSerices=async(payload)=>{
    try {
        const response = await Portfolio({...payload});
        return response.save();
    } catch (error) {
        throw error;
    }
}

export const getAllPortfoliosSerices=async()=>{
    try {
        const response = await Portfolio.find({}).exec();
        return response;
    } catch (error) {
        throw error;
    }
}