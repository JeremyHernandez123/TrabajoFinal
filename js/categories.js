import { createElement } from "react";
import { getCategoria, guardarCategoria } from "./storage";
import { Categoria } from "./models";

document.addEventListener("DOMContentLoaded", function() {
    mostrarCategoria();  

    document.getElementById("formulari").addEventListener("submit", function(event){
        const nom = document.getElementById("nom").value; 
        const color = document.getElementById("color").value; 

        if(nom === ""){
            event.preventDefault();
            alert("Has de posar un nom a la categoría"); 
        } else  {
            alert("Categoria creada"); 
        }

        const categories = getCategoria();
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].nom.toLowerCase() === nom.toLowerCase()) {
                alert('Ja hi ha una categoria amb aquest nom');
                return;
            }
        }
        const novaCategoria = new Categoria(nom, color);
        categories.push(novaCategoria);
        guardarCategories(categories);

        formulari.reset();
        mostrarCategoria();
    })

});


function mostrarCategoria(){
    const llista = document.getElementById("llista-categories");  
    const categories = getCategoria();
    
    llista.innerHTML = '';

    if (categories.length === 0) {
        llista.innerHTML = '<li>No hi ha categories.</li>';
        return;
    }

    for(let i = 0; i < categories.length; i++) {
        const arrayCategories = categories[i]; 
        const li = createElement("li"); 
        li.innerHTML = `
            <span>${categoria.nom}</span>
            <button class="eliminar-categoria">Eliminar</button>
        `;
        llista.apendChild(li); 
    }
}


function eliminarCategoria(nom) {
    let categories = getCategoria();
 
    const noves = [];
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].nom !== nom) {
            noves.push(categories[i]);
        }
    }
 
    guardarCategoria(noves);
    mostrarCategoria();
}