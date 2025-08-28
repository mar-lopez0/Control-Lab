import { item } from "../modulos/productoModulo.js";
import { productos } from "../database/productos.js";


export function seccion1(){

    let seccion = document.createElement('section')
    seccion.className = "seccion1";
    
    productos.forEach(element => {
        seccion.appendChild(item(element.title,element.image,element.price,element.description,element.category,element.rating.rate,element.rating.count,element.id));
    });

    return seccion;
}