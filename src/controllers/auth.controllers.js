import bcrypt from 'bcrypt';
import { findByEmailService, signupService } from "../services/auth.services.js";
import jwt from 'jsonwebtoken';

const signupcontroller = async (req, res) => {
    try {
        const { signupData } = req.body;

        if (!signupData || !signupData.email || !signupData.password || !signupData.name || !signupData.phone) {
            return res.status(400).json({ status: 400, success: false, message: "Missing required fields: name, email, phone, or password" });
        }

        const existingUser = await findByEmailService(signupData.email);
        if (existingUser) {
            return res.status(409).json({ status: 409, success: false, message: "User already exists, please try another email" });
        }

        // Hashing the password securely
        const hashPass = await bcrypt.hash(signupData.password, 10);
        signupData.password = hashPass; // Replace plain text password with hashed password

        // Saving user
        const response = await signupService(signupData);

        if (!response) {
            return res.status(500).json({ status: 500, success: false, message: "Failed to create user" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { 
                name: signupData.name, 
                email: signupData.email, 
                phone: signupData.phone 
            },
            process.env.JWT_SECRET || "your-secret-key", 
            { expiresIn: "7d" }  
        );
        return res.status(201).json({
            status: 201,
            success: true,
            message: "Signup successful!",
            token , 
            id:response._id
        });

    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

export { signupcontroller };
