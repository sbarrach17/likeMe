import pg from "pg";
import "dotenv/config";
import validation from "../middlewares/Validation.js";

const { Pool } = pg;
const pool = new Pool({
  // Configuración de conexión a tu base de datos PostgreSQL
  // user: process.env.PGUSER,
  // password: process.env.PGPASSWORD,
  // host: process.env.PGHOST,
  // database: process.env.PGDATABASE,
  // port: process.env.PGPORT,
});

const addPost = async (titulo, img, descripcion) => {
  try {
    validation(titulo, img, descripcion);
    const consulta =
      "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *";
    const values = [titulo, img, descripcion];
    const result = await pool.query(consulta, values);
    console.log("Post Agregado:", result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error("Error al agregar el post:", error);
    throw error;
  }
};

const deletePost = async (id) => {
  try {
    const consulta = "DELETE FROM posts WHERE id = $1 RETURNING *";
    const values = [id];
    const result = await pool.query(consulta, values);
    console.log("Post eliminado:", result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error("Error al eliminar el post:", error);
    throw error;
  }
};

const likePost = async (id) => {
  try {
    const consulta =
      "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
    const values = [id];
    const result = await pool.query(consulta, values);
    console.log("Like agregado al post:", result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error("Error al dar like al post:", error);
    throw error;
  }
};

const getPosts = async () => {
  try {
    const consulta = "SELECT * FROM posts";
    const result = await pool.query(consulta);
    console.log("Posts obtenidos:", result.rows);
    return result.rows;
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    throw error;
  }
};

export { addPost, getPosts, deletePost, likePost };
