var imagini = [
	"sources/reclama1.jpg",
	"sources/reclama2.jpg",
	"sources/reclama3.jpg"
]; //Imagini de schimbat

var nume = document.getElementById("nume");
var buton = document.getElementById("buton");
var buton2 = document.getElementById("buton2"); //Salvare elemente dupa ID
var img = document.querySelector("img"); //Pentru selectare TAG img
var counter_imagine = 1;
var counter_nume = 0;
var valoare_nume;
var lungime_nume;
var test;
var litera; //Declarare variablie

buton.addEventListener("click", function(){ //Creare functie
	valoare_nume = nume.value ;
	lungime_nume = valoare_nume.length; //Salvare valori pentru vector

	for (var i = 0;i<=lungime_nume;i++){
	litera=valoare_nume[lungime_nume - i];	//Citire elemente vector
	if (lungime_nume>2 && litera !== ' '){
		test = 1;
	}
	else{
		test = 0;
		break; //Pentru a nu se duce pe test = 1
	}
	}
	if (test === 1){
		alert("S-a trimis cu succes!");
	}
	else{
		alert("Mai verifica odata!");
	}			//Verificare variabila de test
})
buton2.addEventListener("click", function(){
	if (counter_imagine == 3){
		counter_imagine = 0;
	}
	img.src = imagini[counter_imagine];
	counter_imagine = counter_imagine + 1;
})				//Functie pentru modificat poza