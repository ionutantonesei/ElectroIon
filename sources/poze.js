var buton1 = document.getElementById('buton_urmator');
var buton2 = document.getElementById('buton_anterior');
var poze = ["sources/rezistori/codificarea-rezistentelor-electronica-culori.png","sources/rezistori/rezistori.jpg","sources/condensatoare/condensatori.png","sources/condensatoare/condensator_umflat.jpg","sources/bobine/bobina1.jpg","sources/bobine/bobina2.jpg"];
var i = 0;
var capat = poze.length;

buton1.addEventListener('click',function(){
	let gigel = document.getElementById("cadru");
	i = i+1;
	if (i<poze.length){
		gigel.src = poze[i];
	}
	else
	gigel.src = 'sources/blank.bmp';
})

buton2.addEventListener('click',function(){
	let gigel = document.getElementById("cadru");
	i = i-1;
	if (i>=0){
		gigel.src = poze[i];
	}
	else
	gigel.src = 'sources/blank.bmp';
})