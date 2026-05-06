document.addEventListener('DOMContentLoaded', function() {
    
    const formulari = document.querySelector('.formulari-crear-categoria');
    if(!formulari) return; 

    formulari.addEventListener('submit', function(event) {
        event.preventDefault(); 


        const nom = document.getElementById('nom').value;
        const color = document.getElementById('color').value; 
        
        if(nom === ''){
            alert('El nom de la categoria no pot estar buit.');
            return;
        }
    });
});