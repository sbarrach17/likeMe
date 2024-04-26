const validation = (titulo, img, descripcion) => {
    if (!titulo || !img || !descripcion) {
        throw new Error("Todos los campos son obligatorios.");
    }
};

export default validation;