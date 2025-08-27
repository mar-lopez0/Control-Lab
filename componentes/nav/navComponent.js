    export function nav() {
    let menu = document.createElement('div');
    menu.className = "menu";

    // Casa
    let homeDiv = document.createElement('div');
    homeDiv.className = "menu-item";
    homeDiv.innerText = "🏠";
    menu.appendChild(homeDiv);

    // Productos
    let productsDiv = document.createElement('div');
    productsDiv.className = "menu-item";
    productsDiv.innerText = "📦";
    menu.appendChild(productsDiv);

    // Ayuda
    let helpDiv = document.createElement('div');
    helpDiv.className = "menu-item";
    helpDiv.innerText = "❔";
    menu.appendChild(helpDiv);

    // Carito
    let cartDiv = document.createElement('div');
    cartDiv.className = "menu-item";
    cartDiv.innerText = "🛒";
    menu.appendChild(cartDiv);

    return menu; 
    }