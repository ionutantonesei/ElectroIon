const canvas = document.getElementById('interactiv');
const ctx = interactiv.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 5;
const centru_X = 150;
const centru_Y = 200;
ctx.arc(centru_X,centru_Y,100,0,Math.PI*2);
ctx.stroke();

ctx.lineWidth = 1;
ctx.strokeStyle = "hsl(120, 100%, 10%)";
ctx.strokeRect (10,15,280,380);

ctx.fillStyle = 'black';
ctx.font = '30px Arial';
ctx.fillText ('UN OM' , 15 , 170);