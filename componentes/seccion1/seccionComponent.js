import { item } from "../modulos/itemModulo.js";


export function seccion1(){

    let seccion = document.createElement('section')
    seccion.className = "seccion1";

    seccion.appendChild(item());
    seccion.appendChild(item());
    seccion.appendChild(item());
    seccion.appendChild(item());

    return seccion;
}