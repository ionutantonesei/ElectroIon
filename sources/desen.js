var valoare = 0;
var bA = '0';
var bB = '0';
var bC = '';
var bD = '±20%';

const bAnegru = document.getElementById('bA-negru').addEventListener('click',function(){bA = '0';document.querySelector('#culori_rezistenta1').style.cssText = 'background: black;';});
const bAmaro = document.getElementById('bA-maro').addEventListener('click',function(){bA = '1';document.querySelector('#culori_rezistenta1').style.cssText = 'background: brown;';});
const bArosu = document.getElementById('bA-rosu').addEventListener('click',function(){bA = '2';document.querySelector('#culori_rezistenta1').style.cssText = 'background: red;';});
const bAportocaliu = document.getElementById('bA-portocaliu').addEventListener('click',function(){bA = '3';document.querySelector('#culori_rezistenta1').style.cssText = 'background: orange;';});
const bAgalben = document.getElementById('bA-galben').addEventListener('click',function(){bA = '4';document.querySelector('#culori_rezistenta1').style.cssText = 'background: yellow;';});
const bAverde = document.getElementById('bA-verde').addEventListener('click',function(){bA = '5';document.querySelector('#culori_rezistenta1').style.cssText = 'background: green;';});
const bAalbastru = document.getElementById('bA-albastru').addEventListener('click',function(){bA = '6';document.querySelector('#culori_rezistenta1').style.cssText = 'background: blue;';});
const bApurpuriu = document.getElementById('bA-purpuriu').addEventListener('click',function(){bA = '7';document.querySelector('#culori_rezistenta1').style.cssText = 'background: purple;';});
const bAgri = document.getElementById('bA-gri').addEventListener('click',function(){bA = '8';document.querySelector('#culori_rezistenta1').style.cssText = 'background: gray;';});
const bAalb = document.getElementById('bA-alb').addEventListener('click',function(){bA = '9';document.querySelector('#culori_rezistenta1').style.cssText = 'background: white;';});

const bBnegru = document.getElementById('bB-negru').addEventListener('click',function(){bB = '0';document.querySelector('#culori_rezistenta2').style.cssText = 'background: black;';});
const bBmaro = document.getElementById('bB-maro').addEventListener('click',function(){bB = '1';document.querySelector('#culori_rezistenta2').style.cssText = 'background: brown;';});
const bBrosu = document.getElementById('bB-rosu').addEventListener('click',function(){bB = '2';document.querySelector('#culori_rezistenta2').style.cssText = 'background: red;';});
const bBportocaliu = document.getElementById('bB-portocaliu').addEventListener('click',function(){bB = '3';document.querySelector('#culori_rezistenta2').style.cssText = 'background: orange;';});
const bBgalben = document.getElementById('bB-galben').addEventListener('click',function(){bB = '4';document.querySelector('#culori_rezistenta2').style.cssText = 'background: yellow;';});
const bBverde = document.getElementById('bB-verde').addEventListener('click',function(){bB = '5';document.querySelector('#culori_rezistenta2').style.cssText = 'background: green;';});
const bBalbastru = document.getElementById('bB-albastru').addEventListener('click',function(){bB = '6';document.querySelector('#culori_rezistenta2').style.cssText = 'background: blue;';});
const bBpurpuriu = document.getElementById('bB-purpuriu').addEventListener('click',function(){bB = '7';document.querySelector('#culori_rezistenta2').style.cssText = 'background: purple;';});
const bBgri = document.getElementById('bB-gri').addEventListener('click',function(){bB = '8';document.querySelector('#culori_rezistenta2').style.cssText = 'background: gray;';});
const bBalb = document.getElementById('bB-alb').addEventListener('click',function(){bB = '9';document.querySelector('#culori_rezistenta2').style.cssText = 'background: white;';});

const bCnegru = document.getElementById('bC-negru').addEventListener('click',function(){bC = '';document.querySelector('#culori_rezistenta3').style.cssText = 'background: black;';});
const bCmaro = document.getElementById('bC-maro').addEventListener('click',function(){bC = '0';document.querySelector('#culori_rezistenta3').style.cssText = 'background: brown;';});
const bCrosu = document.getElementById('bC-rosu').addEventListener('click',function(){bC = '00';document.querySelector('#culori_rezistenta3').style.cssText = 'background: red;';});
const bCportocaliu = document.getElementById('bC-portocaliu').addEventListener('click',function(){bC = '000';document.querySelector('#culori_rezistenta3').style.cssText = 'background: orange;';});
const bCgalben = document.getElementById('bC-galben').addEventListener('click',function(){bC = '0000';document.querySelector('#culori_rezistenta3').style.cssText = 'background: yellow;';});
const bCverde = document.getElementById('bC-verde').addEventListener('click',function(){bC = '00000';document.querySelector('#culori_rezistenta3').style.cssText = 'background: green;';});
const bCalbastru = document.getElementById('bC-albastru').addEventListener('click',function(){bC = '000000';document.querySelector('#culori_rezistenta3').style.cssText = 'background: blue;';});
const bCpurpuriu = document.getElementById('bC-purpuriu').addEventListener('click',function(){bC = '0000000';document.querySelector('#culori_rezistenta3').style.cssText = 'background: purple;';});
const bCgri = document.getElementById('bC-gri').addEventListener('click',function(){bC = '00000000';document.querySelector('#culori_rezistenta3').style.cssText = 'background: gray;';});
const bCalb = document.getElementById('bC-alb').addEventListener('click',function(){bC = '000000000';document.querySelector('#culori_rezistenta3').style.cssText = 'background: white;';});

const bDrosu = document.getElementById('bD-rosu').addEventListener('click',function(){bD = '±2%';document.querySelector('#culori_rezistenta4').style.cssText = 'background: red;';});
const bDauriu = document.getElementById('bD-auriu').addEventListener('click',function(){bD = '±5%';document.querySelector('#culori_rezistenta4').style.cssText = 'background: gold;';});
const bDargintiu = document.getElementById('bD-argintiu').addEventListener('click',function(){bD = '±10%';document.querySelector('#culori_rezistenta4').style.cssText = 'background: silver;';});

function rezultat(){
    valoare = bA+bB+bC+'Ω'+bD;
    valoare_afisare =  document.createElement('P');
    valoare_afisare.innerHTML = valoare;
    document.body.appendChild(valoare_afisare);
    valoare_afisare.style.cssText = 'position: absolute; top: 70vh; left: 10vw; height:5%; width: 15%; font-size:2vw;z-index:2;color:darkgreen;';
    return(valoare);
}
