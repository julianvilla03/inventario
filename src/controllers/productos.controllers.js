import getConnection from "./../db/database.js";

const updateProducto = async (req, res) => {
  try {
        const { id } = req.params;

    const { ProductoNombre, PrecioUnitario } = req.body;

    if (!ProductoNombre) {
      return res.status(400).json({ error: "ProductoNombre es obligatorio" });
    }

    const producto = {
      ProductoNombre,
      PrecioUnitario: PrecioUnitario !== undefined ? PrecioUnitario : 0, 
    };

    const connection = await getConnection();

    const result = await connection.query(
      "UPDATE productos SET ? WHERE ProductoID = ?",
      [producto, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json({ message: "Producto actualizado exitosamente", result });
  } catch (error) {
    console.error("Error 500:", error.message);
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

export const methodHTTP = {
  updateProducto,
};