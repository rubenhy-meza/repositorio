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
var indice=0;
var contadorTotal=0;
var espera=0;
var score=0;
var mov=0;


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
            i=0;
	score=0;
	mov=0;
	$(".panel-score").css("width","25%");
	$(".panel-tablero").show();
	$(".time").show();
	$("#score-text").html("0");
	$("#movimientos-text").html("0");
	clearInterval(intervalo);
	clearInterval(eliminar);
	clearInterval(nuevosDulces);
	clearInterval(tiempo);
	borrartotal();
	intervalo=setInterval(function(){
		desplazamiento()
	},500);
	 

        } else {
            location.reload();
        }  
   

   
   
     
	
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

        if (--timer < 0) {
        	clearInterval(eliminar);
			clearInterval(nuevosDulces);
			clearInterval(intervalo);
			clearInterval(tiempo);
			$(".panel-tablero").hide("drop","slow",$( ".panel-score" ).animate({width:'100%'},3000));
			$(".time").hide();
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
	},200);}
};
//eliminar dulces del panel
function eliminarDulces(){
	matriz=0;
	busquedaHorizontal=buscarHorizontal();
	busquedaVertical=buscarVertical();
	for(var j=1;j<8;j++){
		matriz=matriz+$(".col-"+j).children().length;}

	//Condicional si no encuentra 3 dulces o más, llamamos a la función para volver a completar el juego

	if(busquedaHorizontal==0 && busquedaVertical==0 && matriz!=49){
		clearInterval(eliminar);
		buscarNuevosDulces=0;
		nuevosDulces=setInterval(function(){
			nuevosdulces()
		},500);}

	if(busquedaHorizontal==1||busquedaVertical==1){
		$(".elemento").draggable({disabled:true});
		$("div[class^='col']").css("justify-content","flex-end");
		$(".activo").hide("pulsate",500,function(){
			var scoretmp=$(".activo").length;
			$(".activo").remove("img");
			score=score+scoretmp*10;
			$("#score-text").html(score);//Cambiamos la puntuación
		});
	}
	// si no hay dulces iguales

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
			busquedaHorizontal=buscarHorizontal();
			busquedaVertical=buscarVertical();
			if(busquedaHorizontal==0 && busquedaVertical==0){
				dropped.swap($(droppedOn));}
			if(busquedaHorizontal==1 || busquedaVertical==1){
				clearInterval(nuevosDulces);
				clearInterval(eliminar);
				eliminar=setInterval(function(){
					eliminarDulces()
				},10);}},
	});
};
//buscar dulce horizontalmente
function buscarHorizontal(){
	var busquedaH=0;
	for(var j=1;j<8;j++){
		for(var k=1;k<6;k++){
			var res1=$(".col-"+k).children("img:nth-last-child("+j+")").attr("src");
			var res2=$(".col-"+(k+1)).children("img:nth-last-child("+j+")").attr("src");
			var res3=$(".col-"+(k+2)).children("img:nth-last-child("+j+")").attr("src");
			if((res1==res2) && (res2==res3) && (res1!=null) && (res2!=null) && (res3!=null)){
				$(".col-"+k).children("img:nth-last-child("+(j)+")").attr("class","elemento activo");
				$(".col-"+(k+1)).children("img:nth-last-child("+(j)+")").attr("class","elemento activo");
				$(".col-"+(k+2)).children("img:nth-last-child("+(j)+")").attr("class","elemento activo");
				busquedaH=1;
			}
		}
	}
	return busquedaH;
};
// buscar dulce en vertical

function buscarVertical(){
	var busquedaV=0;
	for(var l=1;l<6;l++){
		for(var k=1;k<8;k++){
			var res1=$(".col-"+k).children("img:nth-child("+l+")").attr("src");
			var res2=$(".col-"+k).children("img:nth-child("+(l+1)+")").attr("src");
			var res3=$(".col-"+k).children("img:nth-child("+(l+2)+")").attr("src");
			if((res1==res2) && (res2==res3) && (res1!=null) && (res2!=null) && (res3!=null)){
				$(".col-"+k).children("img:nth-child("+(l)+")").attr("class","elemento activo");
				$(".col-"+k).children("img:nth-child("+(l+1)+")").attr("class","elemento activo");
				$(".col-"+k).children("img:nth-child("+(l+2)+")").attr("class","elemento activo");
				busquedaV=1;
			}
		}
	}
	return busquedaV;
};
// crear dulces nuevos

function nuevosdulces(){
	$(".elemento").draggable({disabled:true});
	$("div[class^='col']").css("justify-content","flex-start")
	for(var j=1;j<8;j++){
		lencolum[j-1]=$(".col-"+j).children().length;}
	if(buscarNuevosDulces==0){
		for(var j=0;j<7;j++){
			lenrest[j]=(7-lencolum[j]);}
		maximo=Math.max.apply(null,lenrest);
		contadorTotal=maximo;}
	if(maximo!=0){
		if(buscarNuevosDulces==1){
			for(var j=1;j<8;j++){
				if(contadorTotal>(maximo-lenrest[j-1])){
					$(".col-"+j).children("img:nth-child("+(lenrest[j-1])+")").remove("img");}}
		}
		if(buscarNuevosDulces==0){
			buscarNuevosDulces=1;
			for(var k=1;k<8;k++){
				for(var j=0;j<(lenrest[k-1]-1);j++){
					$(".col-"+k).prepend("<img src='' class='elemento' style='visibility:hidden'/>");}}
		}
		for(var j=1;j<8;j++){
			if(contadorTotal>(maximo-lenrest[j-1])){
				numero=Math.floor(Math.random()*4)+1;
				imagen="image/"+numero+".png";
				$(".col-"+j).prepend("<img src="+imagen+" class='elemento'/>");}
		}
	}
	if(contadorTotal==1){
		clearInterval(nuevosDulces);
		eliminar=setInterval(function(){
			eliminarDulces()
		},150);
	}
	contadorTotal=contadorTotal-1;
};
// intercambiar dulces

jQuery.fn.swap=function(b){
	b=jQuery(b)[0];
	var a=this[0];
	var t=a.parentNode.insertBefore(document.createTextNode(''),a);
	b.parentNode.insertBefore(a,b);
	t.parentNode.insertBefore(b,t);
	t.parentNode.removeChild(t);
	return this;
};