import { newOurProjectLeadsServices } from "../services/ourprojects.services.js";


export const newProjectLeadsController=async(req,res)=>{
    try {
        const { projectLeadsData } = req.body;
        const response = await newOurProjectLeadsServices(projectLeadsData);
        return res.status(200).json({ status: 200, success: true, message: "successful", data: response })
    } catch (error) {
        console.log("error",error);
        return res.status(500).json({ status: 500, success: false, message: "success", error: error.message })
    }
};