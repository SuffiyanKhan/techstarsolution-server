import { addProjectCategoryServices, deleteProjectCategoryServices, getProjectCategoryServices } from "../services/projectCategory.services.js";

export const addProjectCategoryController = async (req, res) => {
    try {
        const { projectCategoryData } = req.body;
        const resposne = await addProjectCategoryServices(projectCategoryData);
        return res.status(200).json({ status: 200, success: true, message: "successful", data: resposne })
    } catch (error) {
        return res.status(500).json({ status: 500, success: false, message: "success", error: error.message })
    }
}

export const getAllProjectCategoryController = async (req, res) => {
    try {
        const response = await getProjectCategoryServices();
        return res.status(200).json({ status: 200, success: true, message: "successfully", data: response })
    } catch (error) {
        return res.status(500).json({ status: 500, success: false, message: "Internal Server Error", error: error.message })

    }
}

export const deleteAllProjectCategoryController = async (req, res) => {
    try {
        const { id } = req.body;
        const response = await deleteProjectCategoryServices(id);
        return res.status(200).json({ status: 200, success: true, message: "successfully", data: response })
    } catch (error) {
        return res.status(500).json({ status: 500, success: false, message: "Internal Server Error", error: error.message })

    }
}