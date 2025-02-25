import { getAllTrackingData } from "../services/visitor.services.js"

export const getAllLogsFromTrackingController = async (req, res) => {
    try {
        const response = await getAllTrackingData()
        return res.status(200).json({ status: 200, sucess: true, message: "successfully", data: response })
    } catch (error) {
        return res.status(500).json({ status: 500, sucess: false, message: "server error", error: error.message })
    }
}