import { saveTraningDataService } from "../services/traning.services.js";

const traningDataSaveController = async (req, res) => {
    try {
        const { name, email, address, country, city, zip, phone, traningname, price } = req.body;
        const obj={name, email, address, country, city, zip, phone, traningname, price};
        const response = await saveTraningDataService(obj);
        return res.status(200).json({ status: 200, success: true, message: "success" })
    } catch (error) {
        console.log("error",error.message)
        return res.status(500).json({ status: 500, success: false, message: "internal server error", error: error.message })
    }
}

export{
    traningDataSaveController
}