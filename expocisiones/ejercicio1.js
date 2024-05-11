

window.localStorage.setItem('usuario','mafe');
const usuario = window.localStorage.getItem ('usuario');
console.log(usuario);


window.addEventListener('DOMcontenLoaded', (event)=>{
    console.log ('DOM completamente cargado y analizado');
}) ;



window.open('https://www.facebook.com/?locale=es_LA');




var section = document.getElementById('header');
var texto = section.innerText;
console.log(texto); 


var article = document.getElementById('section');


article.innerText = "es un parrafo";




function modificarTexto() {
    var parrafo = document.getElementById('miparrafo');
    parrafo.innerText = "Este es un nuevo parrafo";
  }
