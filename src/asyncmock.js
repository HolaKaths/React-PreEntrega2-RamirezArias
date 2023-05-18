const productos = [
    { nombre: "Acondicionador", precio: 600, id: 1, img: "/Images/acondicionador.png", categorias: "Higiene" },
    { nombre: "Champú", precio: 550, id: 2, img: "/Images/champu (1).png", categorias: "Higiene" },
    { nombre: "Antipulgas", precio: 3750, id: 3, img: "/Images/anti-pulgas.png", categorias: "Higiene" },
    { nombre: "Cepillo", precio: 100, id: 4, img: "/Images/cepillo.png", categorias: "Higiene" },
    { nombre: "Collar azul", precio: 300, id: 6, img: "/Images/collar-azul.png", categorias: "Accesorios" },
    { nombre: "Collar isabelino", precio: 250, id: 7, img: "/Images/collar-isabelino.png", categorias: "Accesorios" },
    { nombre: "Collar rojo", precio: 300, id: 8, img: "/Images/collar-rojo.png", categorias: "Accesorios" },
    { nombre: "Cortauñas", precio: 230, id: 9, img: "/Images/cortaunas.png", categorias: "Higiene" },
    { nombre: "Gel de baño", precio: 470, id: 10, img: "/Images/geldebano.png", categorias: "Higiene" },
    { nombre: "Jabón", precio: 470, id: 11, img: "/Images/jabon.png", categorias: "Higiene" },
    { nombre: "Kit Peluquería", precio: 670, id: 12, img: "/Images/kit-peluqueria.png", categorias: "Higiene" },
    { nombre: "Kit Champú & Acondicionador", precio: 645, id: 13, img: "/Images/kitchampuyacondicionador.png", categorias: "Higiene" },
    { nombre: "Loción pelaje", precio: 512, id: 14, img: "/Images/locion-pelaje.png", categorias: "Higiene" },
    { nombre: "Loción", precio: 512, id: 15, img: "/Images/locion.png", categorias: "Higiene" },
    { nombre: "Talco", precio: 512, id: 16, img: "/Images/talco.png", categorias: "Higiene" },
    { nombre: "Toalla", precio: 755, id: 17, img: "/Images/toalla.png", categorias: "Higiene" },
    { nombre: "Alimento", precio: 180, id: 18, img: "/Images/alimentos-para-mascotas.png", categorias: "Alimentos" },
    { nombre: "Snacks", precio: 180, id: 19, img: "/Images/snacks.png", categorias: "Alimentos" },
    { nombre: "Bozal", precio: 237, id: 20, img: "/Images/bozal.png", categorias: "Accesorios" },
    { nombre: "Colgante pluma", precio: 112, id: 21, img: "/Images/colgante-pluma.png", categorias: "Juguetes" },
    { nombre: "Colgante ratón", precio: 117, id: 22, img: "/Images/colgante-raton.png", categorias: "Juguetes" },
    { nombre: "Kit juguetes", precio: 295, id: 23, img: "/Images/kit-juguetes.png", categorias: "Juguetes" },
    { nombre: "Kong", precio: 99, id: 24, img: "/Images/kong.png", categorias: "Juguetes" },
    { nombre: "Rascador sencillo", precio: 100, id: 25, img: "/Images/rascador.png", categorias: "Juguetes" },
    { nombre: "Rascador doble", precio: 156, id: 26, img: "/Images/rascador-doble.png", categorias: "Juguetes" },
    { nombre: "Rascador deluxe", precio: 100, id: 27, img: "/Images/rascador-deluxe.png", categorias: "Juguetes" },
    { nombre: "Cuerda", precio: 52, id: 28, img: "/Images/cuerda.png", categorias: "Juguetes" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.categorias === idCategoria);
            resolve(productosCategoria);
        }, 100);
    });
};