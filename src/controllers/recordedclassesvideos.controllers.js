import { addClassesVideoServices, deleterecordedvideoservices, editRecordedVideosService, getallrecordedclassesvideos } from "../services/recordedclassesvideos.services.js"

export const addClassesVideosControllers = async (req, res) => {
    try {
        const { videoData } = req.body;
        const response = await addClassesVideoServices(videoData);
        return res.status(200).json({ status: 200, sucess: true, message: "sucess", data: response })
    } catch (error) {
        console.log("error", error.message)
        return res.status(500).json({ status: 500, sucess: false, message: "internal server error", error: error.message })
    }
}

export const getallclassesvideoscontroller = async (req, res) => {
    try {
        const response = await getallrecordedclassesvideos();
        return res.status(200).json({ status: 200, sucess: true, message: "sucess", data: response })
    } catch (error) {
        return res.status(500).json({ status: 500, sucess: false, message: "internal server error", error: error.message })
    }
}

export const deleterecordedclassevideocontroller = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await deleterecordedvideoservices(id)
        return res.status(200).json({ status: 200, sucess: true, message: "sucessfull" })
    } catch (error) {
        return res.status(500).json({ status: 500, sucess: false, message: "internal server error", error: error.message })
    }
}
export const updaterecordedvideocontroller =async (req, res) => {
    try {
        const { id, videoData } = req.body;
        const response = await editRecordedVideosService(id, videoData);
        return res.status(200).json({ status: 200, sucess: true, message: "sucess" })
    } catch (error) {
        return res.status(500).json({ status: 500, sucess: false, message: "internal server error", error: error.message })
    }
}
