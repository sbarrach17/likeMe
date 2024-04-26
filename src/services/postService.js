// Reemplazar por la URL de la API
const URL_API = "http://localhost:3000";

//obtener los posts desde una API
export const getPosts = async () => {
  try {
    const response = await fetch(`${URL_API}/posts`);
    if (!response.ok) {
      throw new Error('Error al obtener los posts');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al obtener los posts');
  }
};

// agregar un nuevo post a la API
export const addPost = async (postData) => {
  try {
    const response = await fetch(`${URL_API}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error('Error al crear el post');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al crear el post');
  }
};

// eliminar un post de la API por su ID
export const deletePost = async (postId) => {
  try {
    const response = await fetch(`${URL_API}/posts/${postId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error al eliminar el post');
    }
  } catch (error) {
    throw new Error('Error al eliminar el post');
  }
};

//incrementar el contador de likes de un post en la API por su ID
export const likePost = async (postId) => {
  try {
    const response = await fetch(`${URL_API}/posts/like/${postId}`, {
      method: 'PUT',
    });
    if (!response.ok) {
      throw new Error('Error al dar like al post');
    }
  } catch (error) {
    throw new Error('Error al dar like al post');
  }
};
