import { Request, Response } from "express";
import Certificate from "../models/Certificate";

//Get - public
export async function getCertificates(req: Request, res: Response) {
    try {
        const certs = await Certificate.find().sort({ createdAt: -1 });
        res.json(certs);
    } catch (error) {
        res.status(500).json({ message: "Error searching for certificates" });
    }
}

//Post - admin
export async function createCertificates(req: Request, res: Response) {
    try {
        const newCert = new Certificate(req.body);
        await newCert.save();
        res.status(201).json(newCert);
    } catch (error) {
        res.status(400).json({ message: "Error saving certificate. Check your fields." });
    }
}

//Put - admin
export async function updateCertificate(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const updateCert = await Certificate.findByIdAndUpdate(
            id,
            req.body,
            { new: true } //retorna objeto atualizado;
        );
        if(!updateCert) return res.status(404).json({message: "Certificate not found."});

        res.json(updateCert);
    }catch(error){
        res.status(400).json({message: "Error updating certificate."});
    }
}

//Delete - admin
export async function deleteCertificate(req: Request, res: Response){
    try{
        const {id} = req.params;
        const deletedCert = await Certificate.findByIdAndDelete(id);
        if(!deletedCert) return res.status(404).json({message: "Certificate not found."});
        res.json({message: "Certificate deleted!"});
    }catch(error){
        res.status(400).json({message: "Error deleting certificate."});
    }
}