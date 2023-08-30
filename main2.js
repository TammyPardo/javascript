alert("Bienvenidos a Libreria The Book Zone"); 

// clase constructora
class Libros {
    constructor(titulo, autor, genero, precio) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.precio = precio;

    }
};
// Crear una lista de libros disponibles
const librosDisponibles = () => {
    const libritos = [];
    libritos.push(new Libros("El Principito", "Antoine de Saint-Exupéry", "Literatura Infantil", 10000));
    libritos.push(new Libros("Cien años de soledad", "Gabriel García Márquez", "Novela", 18000));
    libritos.push(new Libros("Orgullo y prejuicio", "Jane Austen", "Novela", 15000));
    libritos.push(new Libros("Don Quijote de la Mancha", "Miguel de Cervantes", "Novela", 21000));
    libritos.push(new Libros("La Odisea", "Homero", "Poema Epico", 16000));
    libritos.push(new Libros("Alicia en el país de las maravillas", "Lewis Carroll", "Literatura Fantastica", 12000));
    libritos.push(new Libros("Harry Potter y la piedra filosofal", "J. K. Rowling", "Literatura Fantastica", 17000));
    libritos.push(new Libros("Harry Potter y la Camara secreta", "J. K. Rowling", "Literatura Fantastica", 18000));
    libritos.push(new Libros("Harry Potter y el prisionero de Azkaban", "J. K. Rowling", "Literatura Fantastica", 19000));
    libritos.push(new Libros("Harry Potter y el cáliz de fuego", "J. K. Rowling", "Literatura Fantastica", 17000));
    libritos.push(new Libros("Harry Potter y la Orden del Fénix", "J. K. Rowling", "Literatura Fantastica", 18000));
    libritos.push(new Libros("Harry Potter y el misterio del príncipe", "J. K. Rowling", "Literatura Fantastica", 20000));
    libritos.push(new Libros("Harry Potter y las reliquias de la muerte", "J. K. Rowling", "Literatura Fantastica", 22000));

    return libritos;
};


// metodo comprar
const comprarLibros = () => {
    let comprar = prompt("Indique Titulo de Libro que desea comprar");
    let libritos = librosDisponibles();
    let compraDeLibros = [];
    
    const filtros = libritos.filter(item => {
        return item.titulo.toLowerCase() === comprar.toLowerCase();
    });

    if (filtros.length === 0) {
        alert(`No tenemos ese titulo Disponible ${comprar}`);
        const titulo = [...new Set(libritos.map(libro => libro.titulo))];
        let titulosRegistrados = titulo.join(", ");
        let mensaje = `Poseemos los siguientes Titulos de libros:  ${titulosRegistrados}`;
        alert(mensaje);
        
    };

    filtros.forEach((item, index) => {
        let mensaje = `
        Codigo Libro: ${index + 1}
        Titulo: ${item.titulo}
        Autor: ${item.autor}
        Genero: ${item.genero}
        Precio: $${item.precio}`;
        compraDeLibros.push(item);
        alert(mensaje);
    });


    let opcion = parseInt(prompt("Ingrese Codigo del libro que desea comprar"));
    const libroSeleccionado = filtros[opcion - 1];
    if (opcion >= 1 && opcion <= filtros.length) {
        alert(`Gracias por su elección ${libroSeleccionado.titulo}, ${libroSeleccionado.autor} `);
    } else alert("No valido");

    return compraDeLibros;
};


comprarLibros();

