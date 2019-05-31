var busquedaHorizontal=0;
var busquedaVertical=0;
var buscarNuevosDulces=0;
var lencolum=["","","","","","",""];
var lenrest=["","","","","","",""];
var maximo=0;
var matriz=0;
var intervalo=0;
var eliminar=0;
var nuevosDulces=0;
var tiempo=0;
var i=0;
var contadorTotal=0;
var espera=0;
var score=0;
var mov=0;
var min=2;
var seg=0;

// Inicia Efecto titulo estilos

$(document).ready(function() {
     /*setInterval(function(){
      $(".main-titulo").switchClass("main-titulo","main-titulo-efecto", 800),
      $(".main-titulo").switchClass("main-titulo-efecto","main-titulo", 800)
    }, 1000);*/
     var myVar = setInterval(setColor, 1000);
     function setColor() {
   var x = document.getElementById("Game");
          x.style.color = x.style.color == "yellow" ? "white" : "yellow";
}
});
  
// Iniciar el juego al hacer click en el boton.

