import { getAllDataServices, saveContactFormDataService } from "../services/contact.services.js";

const contacUsDataSaveController = async (req, res) => {
    try {
        const { name, email, subject, phone, content, companyname } = req.body;
        const obj = { name, email, subject, phone, content, companyname };
        const response = await saveContactFormDataService(obj);
        return res.status(200).json({ status: 200, sucess: true, message: "sucess", data: response })
    } catch (error) {
        return res.status(500).json({ status: 500, sucess: false, message: "inernal server error", error: error.message })
    }
}

const getAllDataController=async(req,res)=>{
    try {
        const response = await getAllDataServices();
        return res.status(200).json({ status: 200, sucess: true, message: "sucess", data: response })
    } catch (error) {
        return res.status(500).json({status:500,sucess:false,message:"internal server error",error:error.message})
    }
}

export{
    contacUsDataSaveController,
    getAllDataController
}