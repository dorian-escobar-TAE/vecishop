let tarjeta_container = document.getElementById("productos_descuento");//Global
let tarjeta_container2 = document.getElementById("productos_populares");// Global

const URLPRODUCTOS = "https://data-productos.herokuapp.com/productos1/" //descuento
const URLPOPULARES = "https://data-productos.herokuapp.com/productos2/" //populares

document.addEventListener("DOMContentLoaded", async () => {

    // Pso2: Contenedor Productos populares
    let response = await fetch(URLPRODUCTOS)
    let result = await response.json()

    result.forEach(element => {
        const { id, descuento, name, price, price2, image } = element
        
        tarjeta_container.innerHTML += `
        <div class="card" style="width: 15rem;">
            <img src="${image}" width="500" height="200" class="card-img-top" alt="..." style="width:10rem; border:3px solid black; margin-left:2.5rem; margin-top:1rem;">
            <h3}" >${name}</h3>
            <div class="price">${price}</p>
            <div class="desc">${descuento}</p>
                <a href="#"><button id="${name}" class="btn btn-primary agregarCarrito">Ver detalle</button></a>
            </div>
        </div>
        `

    });

    // Pso3: Contenedor Productos populares

    let response2 = await fetch(URLPOPULARES)
    let result2 = await response2.json()

    result2.forEach(element => {
        const { id, name, price, price2, image } = element
        tarjeta_container2.innerHTML += `
        <div class="card" style="width: 15rem;">
            <img src="${image}" width="500" height="200" class="card-img-top" alt="..." style="width:10rem; border:3px solid black; margin-left:2.5rem; margin-top:1rem;">
            <h3>${name}</h3>
            <div class="price">${price}</p>

                <a href="#"><button id="${name}" class="btn btn-primary agregarCarrito">Ver detalle</button></a>
            </div>
        </div>
        `
    });
})

tarjeta_container.addEventListener('click', async (e) => {


    const name = e.target.id

    console.log(name)


    const response = await fetch(URLPRODUCTOS)
    const result = await response.json()

    console.log(result)
    const resultado_busqueda = result.find(e =>
        e.name === name
    )

    localStorage.setItem('Detail', JSON.stringify(resultado_busqueda));

    window.location.href = "../pages/details.html"

})

tarjeta_container2.addEventListener('click', async (e) => {
    const name = e.target.id

    console.log(name)


    const response = await fetch(URLPOPULARES)
    const result = await response.json()

    console.log(result)
    const resultado_busqueda = result.find(e =>
        e.name === name
    )
    console.log(resultado_busqueda)
    localStorage.setItem('Detail', JSON.stringify(resultado_busqueda));

   window.location.href = "../pages/details.html"

})


