import db from '../module/index.js';


const {portfolio:Portfolio}=db;

export const addPortfolioSerices=async(payload)=>{
    try {
        const response = await Portfolio({...payload});
        return response.saev();
    } catch (error) {
        throw error;
    }
}