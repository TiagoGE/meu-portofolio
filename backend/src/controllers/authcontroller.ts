import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


export async function login(req: Request, res: Response) {

    try{
        const { email, password } = req.body;

        //Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: "E-mail ou senha inválidos" });

        //Compare password with encrypted password in db
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "E-mail ou senha inválidos" });

        //Generate JWT token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET as string,
            { expiresIn: "1d" }
        );

        //Return token to client
        res.json({ token });

    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server error."});
    }
    
}