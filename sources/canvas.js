const canvas = document.getElementById('interactiv');
const ctx = interactiv.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect (5,5,10,10);
ctx.fillRect (590,590,10,10);
ctx.fillStyle = 'green';
ctx.fillRect (300,300,100,50);

ctx.clearRect (310,310,80,30);

ctx.font = '30px Arial';
ctx.fillStyle = 'green';
ctx.fillText ('Exemplu de canvas',10,100);

ctx.lineWidth = 1;
ctx.strokeStyle = 'purple'
ctx.strokeText ('Exemplu de canvas',10,200);