 /*importamos al framework express */
 import express from "express";

 /* asignamos a app toda la funcionalidad para server web*/
 const app = express();

 /*setear un puerto a mi web server */
 app.set("port",5000)
/*hacemos disponible a mi servidor */
 export default app;