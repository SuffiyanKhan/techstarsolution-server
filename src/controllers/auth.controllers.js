import bcrypt from 'bcrypt';
import { findByEmailService, signupService } from "../services/auth.services.js";

const signupcontroller = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const existingUser = await findByEmailService(email);
        if (existingUser) return res.status(409).json({ status: 409, message: "USer already exist, please try other email " });
        const hashPass = bcrypt.hash(password, 10);
        const obj = { name, email, password: hashPass, phone }
        const response = await signupService(obj);
        console.log(response)
        return res.status(200).json({ status: 200, sucess: true, message: "sucessfull" })
    } catch (error) {
        return res.status(500).json({ status: 500, sucess: false, message: "internal server error", error: error.message })
    }
}

const login =async(req,res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json({ status: 500, sucess: false, message: "internal server error", error: error.message })
    }
}

export {
    signupcontroller
}