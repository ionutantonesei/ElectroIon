var buton_culoare_1;
var buton_culoare_2;
var intrare_culoare_1 = "";
var intrare_culoare_2 = "";
const canvas = document.getElementById('interactiv');
const ctx = interactiv.getContext('2d');
const parametrii = {
    x : 300,
    y : 300,
    amplitudine1 : -230,
    amplitudine2 : +230,
    frecventa : 50,
    faza: 0,
    amplitudine_timp : 0,
    frecventa_timp: 0,
    faza_timp: 1
}
const offset = 60;

function culoare_1(){
    buton_culoare_1 = document.querySelector('#schimbare_culoare_buton_1');
    intrare_culoare_1 = document.querySelector('#schimbare_culoare_1').value;
}

function culoare_2(){
    buton_culoare_2 = document.querySelector('#schimbare_culoare_buton_2');
    intrare_culoare_2 = document.querySelector('#schimbare_culoare_2').value;
}

function desenare(){
    ctx.lineWidth = 1;
    a = parametrii.amplitudine1;
    b = parametrii.amplitudine2;
}

function desenare_sinusoida1(){
    ctx.clearRect (0,0,canvas.width,canvas.height)
    desenare();
    if (intrare_culoare_1 == ""){
        ctx.fillStyle = 'red';
    }
    else{
        ctx.fillStyle = intrare_culoare_1;
    }
    ctx.fillRect(parametrii.x,parametrii.y,parametrii.frecventa,a);
    ctx.fillRect(parametrii.x+offset,parametrii.y,parametrii.frecventa,a-10);
    ctx.fillRect(parametrii.x+offset+60,parametrii.y,parametrii.frecventa,a-20);
    ctx.fillRect(parametrii.x+offset+120,parametrii.y,parametrii.frecventa,a-30);
    ctx.fillRect(parametrii.x+offset+180,parametrii.y,parametrii.frecventa,a-40);
    ctx.fillRect(parametrii.x+offset+240,parametrii.y,parametrii.frecventa,a-50);
    ctx.fillRect(parametrii.x+offset+300,parametrii.y,parametrii.frecventa,a-60);
    ctx.fillRect(parametrii.x+offset+360,parametrii.y,parametrii.frecventa,a-70);
    if (intrare_culoare_2 == ""){
        ctx.fillStyle = 'green';
    }
    else{
        ctx.fillStyle = intrare_culoare_2;
    }
    ctx.fillRect(parametrii.x,parametrii.y,parametrii.frecventa,b);
    ctx.fillRect(parametrii.x+offset,parametrii.y,parametrii.frecventa,b+10);
    ctx.fillRect(parametrii.x+offset+60,parametrii.y,parametrii.frecventa,b+20);
    ctx.fillRect(parametrii.x+offset+120,parametrii.y,parametrii.frecventa,b+30);
    ctx.fillRect(parametrii.x+offset+180,parametrii.y,parametrii.frecventa,b+40);
    ctx.fillRect(parametrii.x+offset+240,parametrii.y,parametrii.frecventa,b+50);
    ctx.fillRect(parametrii.x+offset+300,parametrii.y,parametrii.frecventa,b+60);
    ctx.fillRect(parametrii.x+offset+360,parametrii.y,parametrii.frecventa,b+70);
    ctx.fill();
    parametrii.amplitudine1 += 1;
    parametrii.amplitudine2 -= 1;
    if (a == 230 &&b == -230){
        requestAnimationFrame(desenare_sinusoida2);
    }
    else {
        requestAnimationFrame(desenare_sinusoida1);
    }
}

function desenare_sinusoida2(){
    ctx.clearRect (0,0,canvas.width,canvas.height)
    desenare();
    if (intrare_culoare_1 == ""){
        ctx.fillStyle = 'red';
    }
    else{
        ctx.fillStyle = intrare_culoare_1;
    }
    ctx.fillRect(parametrii.x,parametrii.y,parametrii.frecventa,a);
    ctx.fillRect(parametrii.x+offset,parametrii.y,parametrii.frecventa,a-10);
    ctx.fillRect(parametrii.x+offset+60,parametrii.y,parametrii.frecventa,a-20);
    ctx.fillRect(parametrii.x+offset+120,parametrii.y,parametrii.frecventa,a-30);
    ctx.fillRect(parametrii.x+offset+180,parametrii.y,parametrii.frecventa,a-40);
    ctx.fillRect(parametrii.x+offset+240,parametrii.y,parametrii.frecventa,a-50);
    ctx.fillRect(parametrii.x+offset+300,parametrii.y,parametrii.frecventa,a-60);
    ctx.fillRect(parametrii.x+offset+360,parametrii.y,parametrii.frecventa,a-70);
    if (intrare_culoare_2 == ""){
        ctx.fillStyle = 'green';
    }
    else{
        ctx.fillStyle = intrare_culoare_1;
    }
    ctx.fillRect(parametrii.x,parametrii.y,parametrii.frecventa,b);
    ctx.fillRect(parametrii.x+offset,parametrii.y,parametrii.frecventa,b+10);
    ctx.fillRect(parametrii.x+offset+60,parametrii.y,parametrii.frecventa,b+20);
    ctx.fillRect(parametrii.x+offset+120,parametrii.y,parametrii.frecventa,b+30);
    ctx.fillRect(parametrii.x+offset+180,parametrii.y,parametrii.frecventa,b+40);
    ctx.fillRect(parametrii.x+offset+240,parametrii.y,parametrii.frecventa,b+50);
    ctx.fillRect(parametrii.x+offset+300,parametrii.y,parametrii.frecventa,b+60);
    ctx.fillRect(parametrii.x+offset+360,parametrii.y,parametrii.frecventa,b+70);
    ctx.fill();
    parametrii.amplitudine1 -= 1;
    parametrii.amplitudine2 += 1;
    if (a == -230 && b == 230){
        requestAnimationFrame(desenare_sinusoida1);
    }
    else{
        requestAnimationFrame(desenare_sinusoida2)
    }
}

desenare_sinusoida1();