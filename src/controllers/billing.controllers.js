import { getAllBillingDataServices, saveBillingDataSevices, updateBillingDataServices } from "../services/billing_information.services.js";

const saveBillingData = async (req, res) => {
    try {
        const { formData } = req.body;
        const { name, email, phone, address, country, city, zipCode, serviceName, price } = formData;
        const obj = { name, email, phone, address, country, city, zipCode, serviceName, price };
        const response = await saveBillingDataSevices(obj)
        return res.status(200).json({ status: 200, success: true, message: "successfull", data: response, id: response._id })
    } catch (error) {
        return res.status(500).json({ status: 500, success: false, message: "internal server error", error: error.message })
    }
}

const getAddBillingData = async (req, res) => {
    try {
        const response = await getAllBillingDataServices();
        return res.status(200).json({ status: 200, success: true, message: "successfull", data: response })

    } catch (error) {
        return res.status(500).json({ status: 500, success: false, message: "internal server error", error: error.message })
    }
}

const updateBillingDataController = async (req, res) => {
    try {
        const { id } = req.body;
        const response = await updateBillingDataServices(id);
        return res.status(200).json({ status: 200, success: true, message: "successfull", data: response });
    } catch (error) {
        return res.status(500).json({ status: 500, success: false, message: "internal server error", error: error.message })
    }
}

export {
    saveBillingData,
    getAddBillingData,
    updateBillingDataController
}