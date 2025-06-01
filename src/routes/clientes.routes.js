import { Router } from "express";
import { methodHTTP } from "../controllers/clientes.controllers.js";

const router = Router();

router.post("/", methodHTTP.postClientes); 

export default router;