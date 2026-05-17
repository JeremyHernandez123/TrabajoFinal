export function getCategories() {
    const dades = localStorage.getItem('categories');
    return JSON.parse(dades);
}
 
export function guardarCategories(categories) {
    localStorage.setItem('categories', JSON.stringify(categories));
}

export function getTasques() {
    const dades = localStorage.getItem('tasques');
    return JSON.parse(dades);
}
 
export function guardarTasques(tasques) {
    localStorage.setItem('tasques', JSON.stringify(tasques));
}