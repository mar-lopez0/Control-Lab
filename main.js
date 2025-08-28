import { header } from "./componentes/header/headerComponent.js";
import { nav } from "./componentes/nav/navComponent.js";
import { seccion1 } from "./componentes/seccion1/seccionComponent.js";

function seccion (){

    let seccion = document.createElement('seccion');

    //LocalStorange
    let listaDeCompras = localStorage.getItem("carritoLista")

        if (!listaDeCompras) {
            listaDeCompras = [];
            localStorage.setItem("carrito", JSON.stringify(listaDeCompras));

        } else {
            listaDeCompras = JSON.parse(listaDeCompras);
        }

    console.log(listaDeCompras);


    
    //header
    seccion.appendChild(header());


    //seccion
    seccion.appendChild(seccion1());


    //nav
    seccion.appendChild(nav());


    return seccion;
    
}

document.body.appendChild(seccion());