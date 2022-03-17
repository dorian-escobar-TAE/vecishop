let container = document.getElementById("shopping")
let localData = JSON.parse(localStorage.getItem("compra_final"))


document.addEventListener('DOMContentLoaded', () => {
    localData.forEach(element => {
        container.innerHTML += `
        <div class="d-flex align-items-center mb-5">
                        <div class="flex-shrink-0">
                          <img src="${element.image}"
                            class="img-fluid" style="width: 150px;" alt="Generic placeholder image">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <a href="#!" class="float-end text-black"><i class="fas fa-times"></i></a>
                          <h5 class="text-primary">${element.nombre}</h5>
                          <div class="d-flex align-items-center">
                            <p class="fw-bold mb-0 me-5 pe-3">${element.precio}</p>
                            <div class="def-number-input number-input safari_only">
                              <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                class="minus">-</button>
                              <input class="quantity fw-bold text-black" min="0" name="quantity" value="${element.cantidad}"
                                type="number">
                              <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                class="plus">+</button>
                            </div>
                          </div>
                        </div>
                      </div>
        `
    });

})

let precio_total_contenedor = document.getElementById("total")

let acumulaPrecio = 0
localData.forEach((element) => {
  let precio = element.precio.split('/')
  let final = precio[0].split('$')
  acumulaPrecio = Number(acumulaPrecio) + Number(final[1])
})

precio_total_contenedor.innerText = acumulaPrecio;


function limpiar(){
  localStorage.clear()
  location.reload()
}
