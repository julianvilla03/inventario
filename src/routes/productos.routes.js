import { Router } from "express";
import { methodHTTP } from "../controllers/productos.controllers.js";

const router = Router();


router.put("/:id", methodHTTP.updateProducto); 

export default router;