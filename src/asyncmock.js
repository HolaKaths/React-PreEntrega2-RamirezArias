const productos = [
    { nombre: "Acondicionador", precio: 600, id: 1, img: "Images/acondicionador.png", categorias: "Higiene" },
    { nombre: "Champú", precio: 550, id: 2, img: "Images/champu (1).png", categorias: "Higiene"  },
    { nombre: "Antipulgas", precio: 3750, id: 3, img: "Images/anti-pulgas.png", categorias: "Higiene" },
    { nombre: "Cepillo", precio: 100, id: 4, img: "Images/cepillo.png", categorias: "Higiene" },
    { nombre: "Collar azul", precio: 300, id: 6, img: "Images/collar-azul.png", categorias: "Accesorios" },
    { nombre: "Collar isabelino", precio: 250, id: 7, img: "Images/collar-isabelino.png" },
    { nombre: "Collar rojo", precio: 300, id: 8, img: "Images/collar-rojo.png", categorias: "Accesorios" },
    { nombre: "Cortauñas", precio: 230, id: 9, img: "Images/cortaunas.png", categoias: "Higiene" },
    { nombre: "Gel de baño", precio: 470, id: 10, img: "Images/geldebano.png", categorias: "Higiene" },
    { nombre: "Jabón", precio: 470, id: 11, img: "Images/jabon.png", categorias: "Higiene" },
    { nombre: "Kit Peluquería", precio: 670, id: 12, img: "Images/kit-peluqueria.png" , categorias: "Higiene" },
    { nombre: "Kit Champú & Acondicionador", precio: 645, id: 13, img: "Images/kitchampuyacondicionador.png", categorias: "Higiene" },
    { nombre: "Loción pelaje", precio: 512, id: 14, img: "Images/locion-pelaje.png",  categorias: "Higiene" },
    { nombre: "Loción", precio: 512, id: 15, img: "Images/locion.png",  categorias: "Higiene" },
    { nombre: "Talco", precio: 512, id: 16, img: "Images/talco.png", categorias: "Higiene" },
    { nombre: "Toalla", precio: 755, id: 17, img: "Images/toalla.png", categorias: "Higiene" },
    { nombre: "Alimento", precio: 180, id: 18, img: "Images/alimentos-para-mascotas.png", categorias: "Alimento" },
    { nombre: "Snacks", precio: 180, id: 19, img: "Images/snacks.png", categorias: "Alimento" },
]

const categorias = ["Alimentos", "Snacks", "Higiene", "Accesorios", "Juguetes"];

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
