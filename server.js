import express from "express";
import cors from "cors";
import "dotenv/config";
import { getPosts, addPost, deletePost, likePost } from "./src/models/queryPost.js";
import errorHandler from "./src/middlewares/errorStatus.js";

const app = express();
const PORT = 3000; 

app.use(express.json());
app.use(cors());

app.get('/posts', async (req, res, next) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    next(error)
  }
});


app.post('/posts', async (req, res, next) => {
  const { titulo, img, descripcion } = req.body;
  try {
    const newPost = await addPost(titulo, img, descripcion);
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error al agregar el post:", error);
    next(error)
  }
});

app.put('/posts/like/:id', async (req, res, next) => {
  const postId = parseInt(req.params.id);
  try {
      await likePost(postId);
      res.sendStatus(204);
    } catch (error) {
      console.error("Error al dar Like:", error);
      next(error)
    }
  });


app.delete('/posts/:id', async (req, res, next) => {
  try {
    const postId = parseInt(req.params.id);
    await deletePost(postId);
    res.sendStatus(204);
  } catch (error) {
    console.error("Error al eliminar el post:", error);
    next(error)
  }
});


app.get("/", (req, res) => {
  res.send("Welcome, Servidor en NodeJS");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor encendido en el puerto http://localhost:${PORT}`);
});
