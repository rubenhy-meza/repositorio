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
var indice=0;
var contadorTotal=0;
var espera=0;
var score=0;
var mov=0;
var min=2;
var seg=0;

// Inicia Efecto titulo estilos

$(document).ready(function() {
    // efecto que cambia color de match game
     var myVar = setInterval(setColor, 1000);
     function setColor() {
   var x = document.getElementById("Game");
          x.style.color = x.style.color == "yellow" ? "white" : "yellow";

}
});

$(".btn-reinicio").click(function(){

          if ($('.btn-reinicio').text() == "Iniciar") {
            var tiempo = 60 * 2; //Segundos para el juego
            startTimer(tiempo, $("#timer"));
            $('.btn-reinicio').text('Reiniciar');
        } else {
            //location.reload();
        }

	i=0;
	score=0;
	mov=0;
	$(".panel-score").css("width","25%");
	$(".panel-tablero").show();
	$(".time").show();
	$("#score-text").html("0");
	$("#movimientos-text").html("0");
	$(this).html("Reiniciar")
	clearInterval(intervalo);
	clearInterval(eliminar);
	clearInterval(nuevosDulces);
	clearInterval(tiempo);
	min=2;
	seg=0;
	borrartotal();
	intervalo=setInterval(function(){
		desplazamiento()
	},500);
	tiempo=setInterval(function(){
		timer()
	},1000);
});
  
// Iniciar timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var interval= setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $(display).text(minutes + ":" + seconds);

        if (--timer < 0) {//terminarJuego();
            $("body").trigger("finTiempo");
			clearInterval(interval)
        }
    }, 1000);
}
//funcion limpiar panel
function borrartotal(){
	for(var j=1;j<8;j++){
		$(".col-"+j).children("img").detach();}
};

//cargar dulces al panel
function desplazamiento(){
	indice=indice+1
	var numero=0;
	var imagen=0;
	$(".elemento").draggable({disabled:true});
	if(indice<8){
		for(var j=1;j<8;j++){
			if($(".col-"+j).children("img:nth-child("+indice+")").html()==null){
				numero=Math.floor(Math.random()*4)+1;
				imagen="image/"+numero+".png";
				$(".col-"+j).prepend("<img src="+imagen+" class='elemento'/>").css("justify-content","flex-start")
			}}}
	if(indice==8){
	clearInterval(intervalo);
	eliminar=setInterval(function(){
		eliminarDulces()
	},100);}
};
//eliminar dulces del panel
function eliminarDulces(){
	matriz=0;
	busquedaHorizontal=horizontal();
	busquedaVertical=vertical();
	for(var j=1;j<8;j++){
		matriz=matriz+$(".col-"+j).children().length;}

	//Condicional si no encuentra 3 dulces o más, llamamos a la función para volver a completar el juego

	if(busquedaHorizontal==0 && busquedaVertical==0 && matriz!=49){
		clearInterval(eliminar);
		buscarNuevosDulces=0;
		nuevosDulces=setInterval(function(){
			nuevosdulces()
		},600);}

	if(busquedaHorizontal==1||busquedaVertical==1){
		$(".elemento").draggable({disabled:true});
		$("div[class^='col']").css("justify-content","flex-end");
		$(".activo").hide("pulsate",1000,function(){
			var scoretmp=$(".activo").length;
			$(".activo").remove("img");
			score=score+scoretmp*10;
			$("#score-text").html(score);//Cambiamos la puntuación
		});
	}
	if(busquedaHorizontal==0 && busquedaVertical==0 && matriz==49){
		$(".elemento").draggable({
			disabled:false,
			containment:".panel-tablero",
			revert:true,
			revertDuration:0,
			snap:".elemento",
			snapMode:"inner",
			snapTolerance:40,
			start:function(event,ui){
				mov=mov+1;
				$("#movimientos-text").html(mov);}
		});
	}
	$(".elemento").droppable({
		drop:function (event,ui){
			var dropped=ui.draggable;
			var droppedOn=this;
			espera=0;
			do{
				espera=dropped.swap($(droppedOn));}
			while(espera==0);
			busquedaHorizontal=horizontal();
			busquedaVertical=vertical();
			if(busquedaHorizontal==0 && busquedaVertical==0){
				dropped.swap($(droppedOn));}
			if(busquedaHorizontal==1 || busquedaVertical==1){
				clearInterval(nuevosDulces);
				clearInterval(eliminar);
				eliminar=setInterval(function(){
					eliminarDulces()
				},150);}},
	});
};
