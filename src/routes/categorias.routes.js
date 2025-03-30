import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js";
const router = Router();

/*configuracion respuesta desde server metodo http get */
router.get("/", categoriaController.getCategorias)
/*hacemos disponible a routers en toda la app */
export default router;