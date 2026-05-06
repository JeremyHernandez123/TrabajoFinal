export function mostrarCategoria(){
    const dades = localStorage.getItem('categories');
    return JSON.parse(dades); 
}

export function guardarCategoria(categories) {
    localStorage.setItem('categories', JSON.stringify(categories));
}