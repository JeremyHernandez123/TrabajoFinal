import { getTasques, guardarTasques } from "./storage.js";

function mostrarTasques(tasques) {
    const contenidorPendents = document.querySelector(".tasques-pendents");
    const contenidorAcabades = document.querySelector(".tasques-acabades");

    contenidorPendents.innerHTML = "";
    contenidorAcabades.innerHTML = "";

    let pendents = false;
    let acabades = false;

    for (let i = 0; i < tasques.length; i++) {
        const tasca = tasques[i];
        const card = crearTasca(tasca);

        if (tasca.realitzada) {
            contenidorAcabades.appendChild(card);
            acabades = true;
        } else {
            contenidorPendents.appendChild(card);
            pendents = true;
        }
    }
    if (!pendents) {
        contenidorPendents.innerHTML = "<p>No hi ha tasques pendents.</p>";
    }
    if (!acabades) {
        contenidorAcabades.innerHTML = "<p>Encara no has completat cap tasca.</p>";
    }
}

function crearTasca(tasca) {

    let div = document.createElement("div");
    div.className = "tasca-pendent";

    div.innerHTML = `
        <h3>${tasca.titol}</h3>
        <p>${tasca.descripcio}</p>
        <p>Data: ${tasca.data}</p>
        <p>Prioritat: ${tasca.prioritat}</p>

        <input type="checkbox" class="check">
        Feta

        <button class="botoEliminar">Eliminar</button>
    `;
    let checkbox = div.querySelector(".check");
    if (tasca.realitzada) {
        checkbox.checked = true;
    }

    checkbox.addEventListener("change", function () {
        marcarRealitzada(tasca.id, checkbox.checked);
    });

    let boto = div.querySelector(".botoEliminar");

    boto.addEventListener("click", function () {
        eliminarTasca(tasca.id);
    });

    return div;
}

function marcarRealitzada(id, estat) {
    const tasques = getTasques();
    for (let i = 0; i < tasques.length; i++) {
        if (tasques[i].id === id) {
            tasques[i].realitzada = estat;
            break;
        }
    }
    guardarTasques(tasques);
    mostrarTasques(tasques);
}

function eliminarTasca(id) {
    const tasques = getTasques();
    const novesTasques = tasques.filter(function(t) {
        return t.id !== id;
    });
    guardarTasques(novesTasques);
    mostrarTasques(novesTasques);
}


async function carregarTasquesDesdeJSON(nomArxiu) {
    if(nomArxiu == ""){
        alert("Posa un nom de fitxer");
        return;
    }

    let ruta = "dades/" + nomArxiu;
    let resposta;
    let tasques;
    try{
        resposta = await fetch(ruta);
        if(resposta.ok == false){
            alert("No existeix el fitxer");
            return;
        }
        tasques = await resposta.json();
    }catch(error){
        alert("Error en  carregar el fitxer");
        return;
    }

    let tasquesGuardades = getTasques();
    for(let i = 0; i < tasques.length; i++){

        let existeix = false;
        for(let j = 0; j < tasquesGuardades.length; j++){
            if(tasques[i].id == tasquesGuardades[j].id){
                existeix = true;
            }
        }
        if(existeix == false){
            tasquesGuardades.push(tasques[i]);
        }
    }
    guardarTasques(tasquesGuardades);
    mostrarTasques(tasquesGuardades);
}

document.addEventListener("DOMContentLoaded", function () {
    mostrarTasques(getTasques());
 
    const botoPujar = document.getElementById("boto-pujar");
    botoPujar.addEventListener("click", function () {
        const nomArxiu = document.getElementById("nom-arxiu").value;
        carregarTasquesDesdeJSON(nomArxiu);
    });
});