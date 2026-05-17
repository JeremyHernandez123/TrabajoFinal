
export class Categoria {
    constructor(nom, color) {
        this.nom = nom;
        this.color = color;
    }
}
 
export class Tasca {
    constructor(titol, descripcio, data, categoria, prioritat) {
        this.id = generarId();
        this.titol = titol;
        this.descripcio = descripcio;
        this.data = data;
        this.categoria = categoria;   
        this.prioritat = prioritat;
        this.realitzada = false;
    }
}

export function generarId() {
    const tasques = getTasques();

    if (tasques.length === 0) {
        return "task-001";
    }

    let maxNum = 0;
    for (let i = 0; i < tasques.length; i++) {
        const parts = tasques[i].id.split("-");
        const num = parseInt(parts[1]);
        if (num > maxNum) {
            maxNum = num;
        }
    }

    const nouNum = maxNum + 1;
    const numFinal = String(nouNum).padStart(3, "0");
    return "task-" + numFinal;
}