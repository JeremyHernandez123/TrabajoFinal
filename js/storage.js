export function getCategories() {
    const dades = localStorage.getItem('categories');
    return JSON.parse(dades);
}
 
export function guardarCategories(categories) {
    localStorage.setItem('categories', JSON.stringify(categories));
}