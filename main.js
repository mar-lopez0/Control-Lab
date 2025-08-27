import { header } from "./componentes/header/headerComponent.js";
import { nav } from "./componentes/nav/navComponent.js";
import { seccion1 } from "./componentes/seccion1/seccionComponent.js";

function seccion (){

    let seccion = document.createElement('seccion');

    seccion.appendChild(header());



    seccion.appendChild(seccion1());

    seccion.appendChild(nav());


    return seccion;
    
}

document.body.appendChild(seccion());