export function getCategories() {
    const dades = localStorage.getItem('categories');
    if (dades == null) {
        return [];
    }
    try {
        return JSON.parse(dades);
    } catch (error) {
        localStorage.removeItem('categories');
        return [];
    }
}
 
export function guardarCategories(categories) {
    localStorage.setItem('categories', JSON.stringify(categories));
}

export function getTasques() {
    const dades = localStorage.getItem('tasques');
    if (dades == null) {
        return [];
    }
    try {
        return JSON.parse(dades);
    } catch (error) {
        localStorage.removeItem('tasques');
        return [];
    }
}
 
export function guardarTasques(tasques) {
    localStorage.setItem('tasques', JSON.stringify(tasques));
}
