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