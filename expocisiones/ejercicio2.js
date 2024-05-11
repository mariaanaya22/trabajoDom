
function modificahtml() {
    var main = document.getElementById('main');
    main.innerhtml = "<p>Este es un nuevo texto</p>";
  }


  

  function crearelemento() {
    var nuevoelemento = document.createElement('p');
    nuevoelemento.innerHTML = "<strong> nuevo elemento con contenido html </strong>";
    document.getElementById('contenedor').appendChild(nuevoelemento);
  }