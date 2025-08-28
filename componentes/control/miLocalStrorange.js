const LOCAL_STORAGE_KEY_ASSIGNMENTS = 'lista_compras';

function guardarAsignaciones(producto) {
localStorage.setItem(LOCAL_STORAGE_KEY_ASSIGNMENTS, JSON.stringify(producto));
}

function obtenerProductos() {
return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ASSIGNMENTS)) || [];
}

export { LOCAL_STORAGE_KEY_ASSIGNMENTS, guardarProducto, obtenerProductos };