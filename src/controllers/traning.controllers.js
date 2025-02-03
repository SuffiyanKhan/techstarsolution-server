import { accessDeniedTrainingVideosServices, accessTrainingVideosServices, getTraningDataServices, saveTraningDataService } from "../services/traning.services.js";

const traningDataSaveController = async (req, res) => {
    try {
        const { name, email, address, country, city, zip, phone, trainingName, price } = req.body;
        const obj={name, email, address, country, city, zip, phone, trainingName, price};
        const response = await saveTraningDataService(obj);
        return res.status(200).json({ status: 200, success: true, message: "success" })
    } catch (error) {
        console.log("error",error.message)
        return res.status(500).json({ status: 500, success: false, message: "internal server error", error: error.message })
    }
}
const getTraningDataController=async(req,res)=>{
    try {
        const response = await getTraningDataServices();
        if (!response) {
            return res.status(404).json({ status: 404, success: false, message: 'User not found' });
        }
        return res.status(200).json({status:200,sucess:true,message:"sucess",data:response})
    } catch (error) {
        return res.status(500).json({status:500,sucess:false,message:"internal server error",error:error.message})
    }
}

const trainingVideoAccessController = async (req, res) => {
    try {
        const { id } = req.body;

        // Check if ID is provided
        if (!id) {
            return res.status(400).json({ 
                status: 400, 
                success: false, 
                message: "ID is required" 
            });
        }

        // Call the service to update the access field
        const response = await accessTrainingVideosServices(id);

        // If no response is found, it means the video might not exist
        if (!response) {
            return res.status(404).json({ 
                status: 404, 
                success: false, 
                message: "Training video not found" 
            });
        }

        // Return success response
        return res.status(200).json({
            status: 200,
            success: true,
            message: "Training video access updated successfully",
            data: response
        });
    } catch (error) {
        // Return internal server error in case of any unexpected issue
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};
const trainingVideoDeniedController = async (req, res) => {
    try {
        const { id } = req.body;

        // Check if ID is provided
        if (!id) {
            return res.status(400).json({ 
                status: 400, 
                success: false, 
                message: "ID is required" 
            });
        }

        // Call the service to update the access field
        const response = await accessDeniedTrainingVideosServices(id);

        // If no response is found, it means the video might not exist
        if (!response) {
            return res.status(404).json({ 
                status: 404, 
                success: false, 
                message: "Training video not found" 
            });
        }

        // Return success response
        return res.status(200).json({
            status: 200,
            success: true,
            message: "Training video access denied updated successfully",
            data: response
        });
    } catch (error) {
        // Return internal server error in case of any unexpected issue
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

export{
    traningDataSaveController,
    getTraningDataController,
    trainingVideoAccessController,
    trainingVideoDeniedController
}