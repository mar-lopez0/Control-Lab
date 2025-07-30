export function item() {
    
    let item = document.createElement('div');
    item.className = "item";

    //imagen
    const imagen = document.createElement('img');
    imagen.className = "imagen";
    imagen.src = "https://i.pinimg.com/236x/20/3d/b7/203db7431e2fe29146858ba1f8934d86.jpg";

    //titulo
    const titulo = document.createElement('h1');
    titulo.textContent = "Snoopy";
    item.appendChild(titulo);

    //descripcion
    const descripcion = document.createElement('p');
    descripcion.textContent = "LSnoopy es un perro beagle de la historieta Peanuts, creado por Charles M. Schulz. Es la mascota de Charlie Brown. Es muy imaginativo, sueña con ser piloto, escritor o cualquier cosa que se le ocurra. Aunque no habla, se expresa con pensamientos. Es divertido, independiente y su mejor amigo es un pajarito llamado Woodstock.orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod";

    item.appendChild(imagen);
    item.appendChild(descripcion);
    item.appendChild(titulo);

    return item;  
}