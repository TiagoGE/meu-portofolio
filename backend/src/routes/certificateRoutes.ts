import { Router } from "express";
import { createCertificates, deleteCertificate, getCertificates, updateCertificate } from "../controllers/CertificateControler";
import { authMiddleware } from "../middlewares/authMiddlewares";

const router = Router();
//public
router.get("/", getCertificates);

//private
router.post("/", authMiddleware, createCertificates);
router.put("/:id", authMiddleware, updateCertificate);
router.delete("/:id", authMiddleware, deleteCertificate);

export default router;