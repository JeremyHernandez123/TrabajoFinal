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