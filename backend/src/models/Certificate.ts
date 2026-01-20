import mongoose, { Schema, Document } from "mongoose";

export interface ICertificate extends Document {
    title: string;
    organization: string;
    date: string;
    imgLink: string;
}

const CerttificateSchema: Schema = new Schema({
    title: { type: String, required: true },
    organization: { type: String, required: true },
    date: { type: String, required: true },
    imgLink: { type: String, required: true },
}, { timestamps: true }); //Ordena por mais recentes

export default mongoose.model<ICertificate>("Certificate", CerttificateSchema);