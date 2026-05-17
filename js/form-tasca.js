
import { getCategories } from "./storage.js";
import { getTasques, guardarTasques } from "./storage.js";

function carregarCategories() {
    const seleccionar = document.getElementById("categoria");
    if (!seleccionar) return;

    const categories = getCategories();

    seleccionar.innerHTML = "";

    const opcioDefecte = document.createElement("option");
    opcioDefecte.value = "";
    opcioDefecte.textContent = "-- Selecciona una categoria --";
    seleccionar.appendChild(opcioDefecte);

    for (let i = 0; i < categories.length; i++) {
        const cat = categories[i];
        const opcio = document.createElement("option");
        opcio.value = JSON.stringify(cat);
        opcio.textContent = cat.nom;
        seleccionar.appendChild(opcio);
    }
}


