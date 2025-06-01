import getConnection from "./../db/database.js";

const getEmpleados = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT EMPLEADOID, APELLIDO, NOMBRE, TITULO, TITULOCortesia, FECHANACIMIENTO, FECHACONTRATACION, DIRECCION, CIUDAD, REGIONES, CODIGOPOSTAL, PAIS, TELEFONO, EXTENSION, FOTO, NOTAS, JEFE, RUTAFOTO FROM empleados"
    );
    res.json(result);
  } catch (error) {
    console.error("Error 500");
    res.status(500).json({ error: "Error al obtener los empleados" });
  }
};

const postEmpleados = async (req, res) => {
  try {
    const {
      APELLIDO,
      NOMBRE,
      TITULO,
      TITULOCortesia,
      FECHANACIMIENTO,
      FECHACONTRATACION,
      DIRECCION,
      CIUDAD,
      REGIONES,
      CODIGOPOSTAL,
      PAIS,
      TELEFONO,
      EXTENSION,
      FOTO,
      NOTAS,
      JEFE,
      RUTAFOTO,
    } = req.body;

    const empleado = {
      APELLIDO,
      NOMBRE,
      TITULO,
      TITULOCortesia,
      FECHANACIMIENTO,
      FECHACONTRATACION,
      DIRECCION,
      CIUDAD,
      REGIONES,
      CODIGOPOSTAL,
      PAIS,
      TELEFONO,
      EXTENSION,
      FOTO,
      NOTAS,
      JEFE,
      RUTAFOTO,
    };

    const connection = await getConnection();
    const result = await connection.query("INSERT INTO empleados SET ?", empleado);
    res.json(result);
  } catch (error) {
    console.error("Error 500");
    res.status(500).json({ error: "Error al crear el empleado" });
  }
};

const getEmpleado = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT EMPLEADOID, APELLIDO, NOMBRE, TITULO, TITULOCortesia, FECHANACIMIENTO, FECHACONTRATACION, DIRECCION, CIUDAD, REGIONES, CODIGOPOSTAL, PAIS, TELEFONO, EXTENSION, FOTO, NOTAS, JEFE, RUTAFOTO FROM empleados WHERE EMPLEADOID = ?",
      id
    );
    res.json(result);
  } catch (error) {
    console.error("Error 500");
    res.status(500).json({ error: "Error al obtener el empleado" });
  }
};

const deleteEmpleado = async (req, res) => {
  try {
    console.log("ID de empleado a borrar: ", req.params);
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM empleados WHERE EMPLEADOID = ?", id);
    res.json(result);
  } catch (error) {
    console.error("Error 500");
    res.status(500).json({ error: "Error al eliminar el empleado" });
  }
};

const updateEmpleados = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      APELLIDO,
      NOMBRE,
      TITULO,
      TITULOCortesia,
      FECHANACIMIENTO,
      FECHACONTRATACION,
      DIRECCION,
      CIUDAD,
      REGIONES,
      CODIGOPOSTAL,
      PAIS,
      TELEFONO,
      EXTENSION,
      FOTO,
      NOTAS,
      JEFE,
      RUTAFOTO,
    } = req.body;

    const empleado = {
      APELLIDO,
      NOMBRE,
      TITULO,
      TITULOCortesia,
      FECHANACIMIENTO,
      FECHACONTRATACION,
      DIRECCION,
      CIUDAD,
      REGIONES,
      CODIGOPOSTAL,
      PAIS,
      TELEFONO,
      EXTENSION,
      FOTO,
      NOTAS,
      JEFE,
      RUTAFOTO,
    };

    const connection = await getConnection();
    const result = await connection.query("UPDATE empleados SET ? WHERE EMPLEADOID = ?", [
      empleado,
      id,
    ]);
    res.json(result);
  } catch (error) {
    console.error("Error 500");
    res.status(500).json({ error: "Error al actualizar el empleado" });
  }
};

export const methodHTTP = {
  getEmpleados,
  postEmpleados,
  getEmpleado,
  deleteEmpleado,
  updateEmpleados,
};