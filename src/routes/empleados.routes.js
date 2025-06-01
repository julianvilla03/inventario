import { Router } from "express";
import { methodHTTP } from "../controllers/empleados.controllers.js";

const router = Router();

router.get("/", methodHTTP.getEmpleados); 
router.post("/", methodHTTP.postEmpleados); 
router.get("/:id", methodHTTP.getEmpleado); 
router.delete("/:id", methodHTTP.deleteEmpleado); 
router.put("/:id", methodHTTP.updateEmpleados); 

export default router;