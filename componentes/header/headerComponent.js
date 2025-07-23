function header() {
    let header = document.createElement('header');
    header.classList.add('main-header');

    let titulo = document.createElement('h1');
    titulo.innerText = "Margeory";
    titulo.classList.add('header-title');

    let div = document.createElement('div');
    div.classList.add('header-right');

    // Círculo
    let circulo = document.createElement('div');
    circulo.classList.add('circulo');
    div.appendChild(circulo);

    header.appendChild(titulo);
    header.appendChild(div);

    return header;
}

export { header }
