import { getAllBillingDataServices, saveBillingDataSevices } from "../services/billing_information.services.js";

const saveBillingData = async (req, res) => {
    try {
        const { name, email, phone, address, country, city, zipcode, serviceName, price } = req.body;
        const obj = { name, email, phone, address, country, city, zipcode, serviceName, price };
        const response = await saveBillingDataSevices(obj)
        return res.status(200).json({ status: 200, success: true, message: "successfull", data: response, id: response._id })
    } catch (error) {
        return res.status(500).json({ status: 500, success: false, message: "internal server error", error: error.message })
    }
}

const getAddBillingData=async(req,res)=>{
    try {
        const response = await getAllBillingDataServices();
        return res.status(200).json({ status: 200, success: true, message: "successfull", data: response })

    } catch (error) {
        return res.status(500).json({ status: 500, success: false, message: "internal server error", error: error.message })
    }
}

export {
    saveBillingData,
    getAddBillingData
}