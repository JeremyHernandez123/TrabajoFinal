import { getCategories, guardarCategories } from "./storage.js";
import { Categoria } from "./models.js";

document.addEventListener("DOMContentLoaded", function() {
    mostrarCategories();  
    document.getElementById("formulari"); 
    formulari.addEventListener("submit", function(event){
        const nom = document.getElementById("nom").value; 
        const color = document.getElementById("color").value; 

        if(nom === ""){
            event.preventDefault();
            alert("Has de posar un nom a la categoría"); 
        } else  {
            alert("Categoria creada"); 
        }

        const categories = getCategories();
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].nom.toLowerCase() === nom.toLowerCase()) {
                alert('Ja hi ha una categoria amb aquest nom');
                return;
            }
        }
        const novaCategoria = new Categoria(nom, color);
        categories.push(novaCategoria);
        guardarCategories(categories);

        mostrarCategories();
        formulari.reset();
    })

});


function mostrarCategories(){
    const llista = document.getElementById("llista-categories");  
    const categories = getCategories();
    
    llista.innerHTML = '';

    if (categories.length === 0) {
        llista.innerHTML = '<li>No hi ha categories.</li>';
        return;
    }

    for(let i = 0; i < categories.length; i++) {
        const categoria = categories[i]; 
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${categoria.nom}</span>
            <button class="eliminar-categoria" data-nom="${categoria.nom}">Eliminar</button>
        `;
        llista.appendChild(li); 
    }

    const botons = document.querySelectorAll('.eliminar-categoria');
    for (let i = 0; i < botons.length; i++) {
        botons[i].addEventListener('click', function () {
            const nom = this.getAttribute('data-nom');
            eliminarCategoria(nom);
        });
    }
}

function eliminarCategoria(nom) {
    let categories = getCategories();
 
    const noves = [];
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].nom !== nom) {
            noves.push(categories[i]);
        }
    }
 
    guardarCategories(noves);
    mostrarCategories();
}