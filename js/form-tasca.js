
import { getCategories } from "./storage.js";
import { getTasques, guardarTasques } from "./storage.js";
import { Tasca } from "./models.js";

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


document.addEventListener("DOMContentLoaded", function() {
    carregarCategories();

    const formulari = document.querySelector(".formulari-crear-tasca");
    if (!formulari) return;

    formulari.addEventListener("submit", function(event) {
        event.preventDefault();

        const titol = document.getElementById("titol").value.trim();
        const descripcio = document.getElementById("descripcio").value.trim();
        const data = document.getElementById("data").value;
        const categoriaJSON = document.getElementById("categoria").value;
        const prioritat = document.getElementById("prioritat").value;

        if (!validarFormulari(titol, descripcio, data, categoriaJSON, prioritat)) {
            return;
        }
    
        const categoria = JSON.parse(categoriaJSON);
        const novaTasca = new Tasca(titol, descripcio, data, categoria, prioritat);
        const tasques = getTasques();
        tasques.push(novaTasca);
        guardarTasques(tasques);

        alert("Tasca creada");
        formulari.reset();
        carregarCategories();
    });
});