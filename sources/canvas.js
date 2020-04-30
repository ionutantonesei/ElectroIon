const canvas = document.getElementById('interactiv');
const ctx = interactiv.getContext('2d');
const cerc = {
    x : 150,
    y : 100,
    raza : 25,
    dx : 3,
    dy : 3,
}

function desenare_cerc(){
ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(cerc.x,cerc.y,cerc.raza,0,Math.PI*2);
ctx.fill();
}

function update(){
    ctx.fillStyle = 'green';
    ctx.clearRect (0,0,canvas.width,canvas.height);
    desenare_cerc();
    cerc.raza += 1;
    if (cerc.raza == 100)
    {
        requestAnimationFrame(update2);
    }
    else{
    requestAnimationFrame(update);
    }
}

function update2(){
    ctx.clearRect (0,0,canvas.width,canvas.height);
    desenare_cerc();
    cerc.raza -= 1;
    if (cerc.raza == 0)
    {
        requestAnimationFrame(update);
    }
    else{
    requestAnimationFrame(update2);
    }
}

update();