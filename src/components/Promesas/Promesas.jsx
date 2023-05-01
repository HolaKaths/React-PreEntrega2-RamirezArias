

const Promesas = () => {

    const tusPromesas = () => {
        return new Promise((resolve, reject) => {
            if (estado) {
                resolve("Promesa cumplida, logrado");
            } else {
                reject("Promesa rechazada, no fue logrado");
            }

        })
    }

    tusPromesas(true)
        .then( (respuesta) => {
            console.log(respuesta);
        })
        .catch((error) => {
            console.log (error)
        })
        .finally()

    return (
        <div>
            Promesas
        </div>
    )
}



export default Promesas
