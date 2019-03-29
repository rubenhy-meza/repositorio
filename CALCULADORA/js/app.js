var display= document.getElementById('display');

var calculadora = {
   init: function(){ 
 var cero = document.getElementById('0')
 var uno = document.getElementById('1')
 var dos = document.getElementById('2')
 var tres = document.getElementById('3')
 var cuatro = document.getElementById('4')
 var cinco = document.getElementById('5')
 var seis = document.getElementById('6')
 var siete= document.getElementById('7')
 var ocho = document.getElementById('8')
 var nueve = document.getElementById('9')
 var suma = document.getElementById('mas')
 var menos = document.getElementById('menos')
 var divicion = document.getElementById('dividido')
 var multiplica = document.getElementById('por')
 var punto= document.getElementById('punto')
 var igual = document.getElementById('igual')
var raiz = document.getElementById('raiz')
var borrar = document.getElementById('on')
 var sign = document.getElementById('sign')	
 	// funciones
cero.addEventListener("click",function(){
	self.numero("0")})
cero.addEventListener("mousedown",function(){
	cero.setAttribute("style","transform:scale(0.95, 0.95")})
cero.addEventListener("mouseout",function(){
	cero.setAttribute("style","transform:scale(1, 1")})

uno.addEventListener("click",function(){
	self.numero("1")})
uno.addEventListener("mousedown",function(){
	uno.setAttribute("style","transform:scale(0.95, 0.95")})
uno.addEventListener("mouseout",function(){
	uno.setAttribute("style","transform:scale(1, 1")})

dos.addEventListener("click",function(){
	self.numero("2")})
dos.addEventListener("mousedown",function(){
	dos.setAttribute("style","transform:scale(0.95, 0.95")})
dos.addEventListener("mouseout",function(){
	dos.setAttribute("style","transform:scale(1, 1")})

tres.addEventListener("click",function(){
	self.numero("3")})
tres.addEventListener("mousedown",function(){
	tres.setAttribute("style","transform:scale(0.95, 0.95")})
tres.addEventListener("mouseout",function(){
	tres.setAttribute("style","transform:scale(1, 1")})

cuatro.addEventListener("click",function(){
	self.numero("4")})
cuatro.addEventListener("mousedown",function(){
	cuatro.setAttribute("style","transform:scale(0.95, 0.95")})
cuatro.addEventListener("mouseout",function(){
	cuatro.setAttribute("style","transform:scale(1, 1")})
cinco.addEventListener("click",function(){
	self.numero("5")})
cinco.addEventListener("mousedown",function(){
	cinco.setAttribute("style","transform:scale(0.95, 0.95")})
cinco.addEventListener("mouseout",function(){
	cinco.setAttribute("style","transform:scale(1, 1")})
seis.addEventListener("click",function(){
	self.numero("6")})
seis.addEventListener("mousedown",function(){
	seis.setAttribute("style","transform:scale(0.95, 0.95")})
seis.addEventListener("mouseout",function(){
	seis.setAttribute("style","transform:scale(1, 1")})
siete.addEventListener("click",function(){
	self.numero("7")})
siete.addEventListener("mousedown",function(){
	siete.setAttribute("style","transform:scale(0.95, 0.95")})
siete.addEventListener("mouseout",function(){
	siete.setAttribute("style","transform:scale(1, 1")})
ocho.addEventListener("click",function(){
	self.numero("8")})
ocho.addEventListener("mousedown",function(){
	ocho.setAttribute("style","transform:scale(0.95, 0.95")})
ocho.addEventListener("mouseout",function(){
   ocho.setAttribute("style","transform:scale(1, 1")})
nueve.addEventListener("click",function(){
	self.numero("9")})
nueve.addEventListener("mousedown",function(){
	nueve.setAttribute("style","transform:scale(0.95, 0.95")})
nueve.addEventListener("mouseout",function(){
	nueve.setAttribute("style","transform:scale(1, 1")})
menos.addEventListener("click",function(){
	self.operar("-")})
menos.addEventListener("mousedown",function(){
	menos.setAttribute("style","transform:scale(0.95, 0.95")})
menos.addEventListener("mouseout",function(){
	menos.setAttribute("style","transform:scale(1, 1")})
suma.addEventListener("click",function(){
	self.operar("+")})
suma.addEventListener("mousedown",function(){
	suma.setAttribute("style","transform:scale(0.95, 0.95")})
suma.addEventListener("mouseout",function(){
suma.setAttribute("style","transform:scale(1, 1")})
divicion.addEventListener("click",function(){
	self.operar("/")})
divicion.addEventListener("mousedown",function(){
	divicion.setAttribute("style","transform:scale(0.95, 0.95")})
divicion.addEventListener("mouseout",function(){
	divicion.setAttribute("style","transform:scale(1, 1")})
multiplica.addEventListener("click",function(){
	self.operar("*")})
}

 }


    x="0"; //número en pantalla
	xi=1; //iniciar número en pantalla: 1=si; 0=no;
	coma=0; //estado punto decimal 0=no, 1=si;
	ni=0; //número oculto o en espera.
	op="no";
var isSign = false;
var contardigitos=0;


function borrar(e) {
			 display.innerHTML="0"; //poner pantalla a 0
			 x="0"; //reiniciar número en pantalla
			 coma=0; //reiniciar estado coma decimal 
			 ni=0 //indicador de número oculto a 0;
			 op="no" //borrar operación en curso.
			 }

function operar(s) {
			 igual() //si hay operaciones pendientes se realizan primero
			 ni=x //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
			 op=s; //guardamos tipo de operación.
			 xi=1; //inicializar pantalla.
			 }



calculadora.init();