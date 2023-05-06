const productos = [
    { nombre: "Acondicionador", precio: 600, id: 1, img: ".src/components/images/acondicionador.png" },
    { nombre: "Alimento", precio: 180, id: 2, img: ".src/components/images/alimentos-para-mascotas.png" },
    { nombre: "Antipulgas", precio: 3750, id: 3, img: ".src/components/images/anti-pulgas" },
    { nombre: "Cepillo", precio: 100, id: 4, img: ".src/components/images/cepillo.png" },
    { nombre: "Champú", precio: 550, id: 5, img: ".src/components/images/champu (1).png" },
    { nombre: "Collar azul", precio: 300, id: 6, img: ".src/components/images/collar-azul.png" },
    { nombre: "Collar isabelino", precio: 250, id: 7, img: ".src/components/images/collar-isabelino.png" },
    { nombre: "Collar rojo", precio: 300, id: 8, img: ".src/components/images/collar-rojo.png" }
    
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout (() => {
            const producto = productos.find (prod => prod.id === id);
            resolve (producto);
        }, 2000)
    })
}
