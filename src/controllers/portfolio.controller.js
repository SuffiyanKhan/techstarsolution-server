import { addPortfolioSerices } from "../services/portfolio.service.js";

export const addPortfolioController=async(req,res)=>{
    try {
        const {portfolioData}=req.body;
        const resposne = await addPortfolioSerices(portfolioData);
        return res.status(200).json({status:200,success:true,message:"success",data:resposne})
    } catch (error) {
        return res.status(500).json({status:500,success:false,message:"Internal Server Error",error:error.message})
    }
}