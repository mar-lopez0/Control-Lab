export function item(titulo,urlImg,price,description) {
    
    let item = document.createElement('div');
    item.className = "item";

    let h3 = document.createElement('h3');
    h3.className = "titulo";
    h3.textContent = titulo;
    item.appendChild(h3);
    

    let img = document.createElement('img');
    img.src = urlImg;
    item.appendChild(img);

    
    // elemento descripción
    let descripcion = document.createElement('p');
    descripcion.className = "description";
    descripcion.textContent = description;
    item.appendChild(descripcion);
    
    let precioEl = document.createElement('p');
    precioEl.className = "price";
    precioEl.textContent = `Precio: $${price}`;
    item.appendChild(precioEl);


    item.addEventListener('click' ,()=>{
        item.classList.add("verde");
        let headercontenedor = document.querySelector('header');
        headercontenedor.classList.add("ocultar");
    });

    return item;
}