 /*importamos al framework express */
 import express from "express";
 import cors from "cors"
 import categoriasRoutes from "./routes/categorias.routes.js"
 
 /* asignamos a app toda la funcionalidad para server web*/
 const app = express();

 /*setear un puerto a mi web server */
 app.set("port",5000)

 /*Middleware */
 app.use(express.json())
 
 app.use(cors());

 /*routers */

 app.use("/api/categorias",categoriasRoutes)

/*hacemos disponible a mi servidor */
 export default app;