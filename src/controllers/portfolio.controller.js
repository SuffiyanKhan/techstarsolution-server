import { addPortfolioSerices, deletePortfoliosSerices, getAllPortfoliosSerices } from "../services/portfolio.service.js";

export const addPortfolioController = async (req, res) => {
    try {
        const { portfolioData } = req.body;
        const resposne = await addPortfolioSerices(portfolioData);
        return res.status(200).json({ status: 200, success: true, message: "success", data: resposne })
    } catch (error) {
        console.log("Server ERROR From Portfolio", error.message)
        return res.status(500).json({ status: 500, success: false, message: "Internal Server Error", error: error.message })
    }
}

export const getAllPortfolioController = async (req, res) => {
    try {
        const resposne = await getAllPortfoliosSerices();
        return res.status(200).json({ status: 200, success: true, message: "success", data: resposne })
    } catch (error) {
        console.log("Server ERROR From Portfolio", error.message)
        return res.status(500).json({ status: 500, success: false, message: "Internal Server Error", error: error.message })
    }
}


export const deletePortfolioController = async (req, res) => {
    try {
        const id = req.params.id
        const resposne = await deletePortfoliosSerices(id);
        return res.status(200).json({ status: 200, success: true, message: "success", data: resposne })
    } catch (error) {
        console.log("Server ERROR From Portfolio", error.message)
        return res.status(500).json({ status: 500, success: false, message: "Internal Server Error", error: error.message })
    }
}