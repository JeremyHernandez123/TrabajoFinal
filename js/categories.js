import { createElement } from "react";
import { getCategoria, guardarCategoria } from "./storage";

document.addEventListener("DOMContentLoaded", function() {
    mostrarLListaCategories();  

    document.getElementById("#formulari").addEventListener("submit", function(event){
        const nom = document.getElementById("#nom").value; 
        const color = document.getElementById("#color").value; 

        if(nom === ""){
            event.preventDefault();
            alert("Has de posar un nom a la categoría"); 
        } else  {
            alert("Categoria creada"); 
        }

        const categoria = {nom:nom, color:color}; 
        guardarCategoria(categoria); 
    })


    getCategoria(); 
    mostrarCategoria()

});


function mostrarCategoria(){
    const llista = document.getElementById("#llista-categories");  
    const categories = getCategoria();
    
    if (categories.length === 0) {
        llista.innerHTML = "<li>No hi ha categories.</li>";
        return;
    }

    for(let i = 0; i < llista.length; i++) {
        const arrayCategories = categories[i]; 
        const li = createElement("li"); 
        li.innerHTML = `
            ${arrayCategories.nom}
            <button> Eliminar   </button> 
        `

        llista.apendChild(li); 
    }
}
