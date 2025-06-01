import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js";
const router = Router();

/*configuracion respuesta desde server metodo http get */

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.postCategorias);

/*Ruta que recibe un parametro */
router.get("/:id", categoriaController.getCategry);
/*Ruta que resibe ID de categoria a borrar */
router.delete("/:id", categoriaController.deleteCategry);
/*Ruta que recibe como parametro tanto el cuerpo id a actualizar */
router.put("/:id", categoriaController.updateCategorias);

export default router;