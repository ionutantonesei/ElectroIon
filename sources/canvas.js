const canvas = document.getElementById('interactiv');
const ctx = interactiv.getContext('2d');

ctx.strokeStyle = "hsl(120, 100%, 10%)";
ctx.strokeRect (10,15,200,300);

ctx.fillStyle = 'black';
ctx.font = '30px Arial';
ctx.fillText ('Un test' , 15 , 170);