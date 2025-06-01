import getConnection from "./../db/database.js";

const postClientes = async (req, res) => {
  try {
  
    const {
      CLIENTEID,
      COMPANIA,
      CONTACTO,
      TITULO,
      DIRECCION,
      CIUDAD,
      REGIONES,
      CODIGOPOSTAL,
      PAIS,
      TELEFONO,
      FAX,
    } = req.body;

  
    if (!CLIENTEID) {
      return res.status(400).json({ error: "CLIENTEID es obligatorio" });
    }
    if (!COMPANIA) {
      return res.status(400).json({ error: "COMPANIA es obligatorio" });
    }

    if (CLIENTEID.length !== 5) {
      return res.status(400).json({ error: "CLIENTEID debe tener exactamente 5 caracteres" });
    }

    const cliente = {
      CLIENTEID,
      COMPANIA,
      CONTACTO,
      TITULO,
      DIRECCION,
      CIUDAD,
      REGIONES,
      CODIGOPOSTAL,
      PAIS,
      TELEFONO,
      FAX,
    };

    const connection = await getConnection();

    const result = await connection.query("INSERT INTO clientes SET ?", cliente);

    res.status(201).json({ message: "Cliente creado exitosamente", result });
  } catch (error) {
    console.error("Error 500:", error.message);
    if (error.code === "ER_DUP_ENTRY") {
      res.status(400).json({ error: "El CLIENTEID ya existe" });
    } else {
      res.status(500).json({ error: "Error al crear el cliente" });
    }
  }
};

export const methodHTTP = {
  postClientes,
};