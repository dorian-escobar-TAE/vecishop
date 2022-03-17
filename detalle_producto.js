let carta = document.getElementById('carta');
let lista = []

document.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(localStorage.getItem("Detail"));
    const { id, descuento, name, price, price2, image } = data
    if (id == 1 || id == 2 || id == 3 || id == 4 || id == 5) {
        carta.innerHTML += `
        <section class="featured" id="featured">
        <div class="row">
           <div class="image-container">
              <div class="big-image">
                 <img src="${image}" class="big-image-1" alt="">
              </div>
           </div>
           <div class="content">
              <h3 id="titulo">${name} </h3>
              <div class="price">${price}</div>
              <br>
              <div class="dropdown">
                 <button class="dropbtn">Seleccione el nivel de madurez</button>
                 <div class="dropdown-content">
                    <a href="#">Maduro</a>
                    <a href="#">Normal</a>
                    <a href="#">Verde</a>
                 </div>
              </div>
              <br>
              <br>
              <input class="input_cantidad" type="number" name="cantidad" placeholder="cantidad">
                <input onclick="agregar()" class="input_cantidad" type="button" value="Agregar al carrito">
              </div>
        </div>
     </section>
        `
    } else {
        carta.innerHTML += `
    <section class="featured" id="featured">
    <div class="row">
       <div class="image-container">
          <div class="big-image">
             <img src="${image}" class="big-image-1" alt="">
          </div>
       </div>
       <div class="content">
          <h3 id="titulo">${name} </h3>
          <div class="price">${price}</div>
          <input class="input_cantidad" type="number" name="cantidad" placeholder="cantidad">
          <input onclick="agregar()" class="input_cantidad" type="button" value="Agregar al carrito">
      </div>
    </div>
 </section>
    `
    }
})

function agregar() {

   let title = document.getElementById("titulo").innerHTML
   let price = document.querySelector(".price").textContent
   let cantidad = document.querySelector(".input_cantidad").value
   let image = document.querySelector(".big-image-1").src

   let object = {
      nombre: title,
      precio: price,
      cantidad: cantidad,
      image: image
   }



   let locals = localStorage.getItem("compra_final")

   let parsedItems = JSON.parse(locals)


   if(parsedItems == null){
      parsedItems = []
   }

   parsedItems.push(object)


   localStorage.setItem("compra_final", JSON.stringify(parsedItems))

}