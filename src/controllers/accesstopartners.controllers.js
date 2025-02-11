import { addDataOfAccessPartnersServices, findByEmailAccessPartnersServices, getAllDataServices } from "../services/accesstoothers.services.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import serverconfig from "../config/config.js";

export const addDataOfAccessPartnersControllers = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        if (!password) {
            return res.status(400).json({ status: 400, success: false, message: 'Password is required' });
        }

        const hashpass = await bcrypt.hash(password, 10);
        const obj = {
            name,
            email,
            password: hashpass,
            phone
        };

        const response = await addDataOfAccessPartnersServices(obj);
        return res.status(200).json({ status: 200, success: true, message: 'Success', data: response });
    } catch (error) {
        console.log("ERROR FROM THIS:", error.message);
        return res.status(500).json({ status: 500, success: false, message: "Internal server error", error: error.message });
    }
};

export const getAllDataOfContolers = async (req, res) => {
    try {
        // Data get karo
        const response = await getAllDataServices();

        return res.status(200).json({
            status: 200,
            success: true,
            message: 'Success',
            data: response
        });

    } catch (error) {
        console.log("ERROR FROM THIS:", error.message);
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};


export const loginaccesspartnersControllers = async (req, res) => {
    try {
        const { email, password } = req.body;

        // ✅ Error handling: Check if email & password are provided
        if (!email || !password) {
            return res.status(400).json({ 
                status: 400, 
                success: false, 
                message: "Email aur Password zaroori hai!" 
            });
        }

        // ✅ Find user by email
        const existingUser = await findByEmailAccessPartnersServices(email);
        if (!existingUser) {
            return res.status(404).json({ 
                status: 404, 
                success: false, 
                message: "User nahi mila!" 
            });
        }

        // ✅ Password compare
        const comparePass = await bcrypt.compare(password, existingUser.password);
        if (!comparePass) {
            return res.status(401).json({ 
                status: 401, 
                success: false, 
                message: "Password incorrect hai!" 
            });
        }

        // ✅ Generate JWT Token
        const token = jwt.sign(
            { id: existingUser._id, email: existingUser.email }, 
            serverconfig.secret_key, 
            { expiresIn: "7d" }  // Token 7 din tak valid hoga
        );

        // ✅ Send response
        return res.status(200).json({
            status: 200,
            success: true,
            message: "Login successful!",
            token,
            user: {
                id: existingUser._id,
                name: existingUser.name,
                email: existingUser.email
            }
        });

    } catch (error) {
        console.error("ERROR FROM LOGIN:", error.message);
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};