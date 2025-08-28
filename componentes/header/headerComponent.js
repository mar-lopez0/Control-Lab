function header() {
    let header = document.createElement('header');
    header.className = "headercontenedor";

    let text = document.createElement('h1');
    text.className = "header-texto";
    text.innerText = "ByTrendy";

    let div = document.createElement('div');
    div.className = "header-circulo";

    
    let img = document.createElement('img');
    img.className = "imagen";
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png";

    header.appendChild(text);
    header.appendChild(div);
    div.appendChild(img);

    return header;
}

export { header }