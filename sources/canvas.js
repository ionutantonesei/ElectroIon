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

function desenare(){
    ctx.lineWidth = 1;
    a = parametrii.amplitudine1;
    b = parametrii.amplitudine2;
}

function desenare_sinusoida1(){
    ctx.clearRect (0,0,canvas.width,canvas.height)
    desenare();
    ctx.fillStyle = 'green';
    ctx.fillRect(parametrii.x,parametrii.y,parametrii.frecventa,a);
    ctx.fillStyle = 'red';
    ctx.fillRect(parametrii.x,parametrii.y,parametrii.frecventa,b);
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
    ctx.fillStyle = 'red';
    ctx.fillRect(parametrii.x,parametrii.y,parametrii.frecventa,a);
    ctx.fillStyle = 'green';
    ctx.fillRect(parametrii.x,parametrii.y,parametrii.frecventa,b);
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