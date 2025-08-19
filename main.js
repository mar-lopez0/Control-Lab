import { header } from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componentes/seccion1/seccionComponent.js";

function seccion (){

    let seccion = document.createElement('seccion');

    seccion.appendChild(header());



    seccion.appendChild(seccion1());


    return seccion;
    
}

document.body.appendChild(seccion());