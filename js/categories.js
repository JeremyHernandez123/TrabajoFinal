import { mostrarCategoria, guardarCategoria, getCategoria } from './storage.js';

document.addEventListener('DOMContentLoaded', function() {    
    const formulari = document.querySelector('.formulari-crear-categoria');
    if(!formulari) return; 

    formulari.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nom = document.getElementById('nom').value.trim();
        const color = document.getElementById('color').value; 
        
        if(nom === ''){
            alert('El nom de la categoria no pot estar buit.');
            return;
        }
        const categories = getCategoria(); 
        const novaCategoria = {nom: nom, color: color}; 
        categories.push(novaCategoria);
        guardarCategoria(categories);

        console.log('La categoria s\'ha creat:', novaCategoria);
        mostrarCategoria();
    });
});