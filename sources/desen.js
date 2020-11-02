var valoare = 0;
var bA = '0';
var bB = '0';
var bC = '';
var bD = '±20%';

const bAnegru = document.getElementById('bA-negru').addEventListener('click',function(){bA = '0'});
const bAmaro = document.getElementById('bA-maro').addEventListener('click',function(){bA = '1'});
const bArosu = document.getElementById('bA-rosu').addEventListener('click',function(){bA = '2'});
const bAportocaliu = document.getElementById('bA-portocaliu').addEventListener('click',function(){bA = '3'});
const bAgalben = document.getElementById('bA-galben').addEventListener('click',function(){bA = '4'});
const bAverde = document.getElementById('bA-verde').addEventListener('click',function(){bA = '5'});
const bAalbastru = document.getElementById('bA-albastru').addEventListener('click',function(){bA = '6'});
const bApurpuriu = document.getElementById('bA-purpuriu').addEventListener('click',function(){bA = '7'});
const bAgri = document.getElementById('bA-gri').addEventListener('click',function(){bA = '8'});
const bAalb = document.getElementById('bA-alb').addEventListener('click',function(){bA = '9'});

const bBnegru = document.getElementById('bB-negru').addEventListener('click',function(){bB = '0'});
const bBmaro = document.getElementById('bB-maro').addEventListener('click',function(){bB = '1'});
const bBrosu = document.getElementById('bB-rosu').addEventListener('click',function(){bB = '2'});
const bBportocaliu = document.getElementById('bB-portocaliu').addEventListener('click',function(){bB = '3'});
const bBgalben = document.getElementById('bB-galben').addEventListener('click',function(){bB = '4'});
const bBverde = document.getElementById('bB-verde').addEventListener('click',function(){bB = '5'});
const bBalbastru = document.getElementById('bB-albastru').addEventListener('click',function(){bB = '6'});
const bBpurpuriu = document.getElementById('bB-purpuriu').addEventListener('click',function(){bB = '7'});
const bBgri = document.getElementById('bB-gri').addEventListener('click',function(){bB = '8'});
const bBalb = document.getElementById('bB-alb').addEventListener('click',function(){bB = '9'});

const bCnegru = document.getElementById('bC-negru').addEventListener('click',function(){bC = ''});
const bCmaro = document.getElementById('bC-maro').addEventListener('click',function(){bC = '0'});
const bCrosu = document.getElementById('bC-rosu').addEventListener('click',function(){bC = '00'});
const bCportocaliu = document.getElementById('bC-portocaliu').addEventListener('click',function(){bC = '000'});
const bCgalben = document.getElementById('bC-galben').addEventListener('click',function(){bC = '0000'});
const bCverde = document.getElementById('bC-verde').addEventListener('click',function(){bC = '00000'});
const bCalbastru = document.getElementById('bC-albastru').addEventListener('click',function(){bC = '000000'});
const bCpurpuriu = document.getElementById('bC-purpuriu').addEventListener('click',function(){bC = '0000000'});
const bCgri = document.getElementById('bC-gri').addEventListener('click',function(){bC = '00000000'});
const bCalb = document.getElementById('bC-alb').addEventListener('click',function(){bC = '000000000'});

const bDrosu = document.getElementById('bD-rosu').addEventListener('click',function(){bD = '±2%'});
const bDauriu = document.getElementById('bD-auriu').addEventListener('click',function(){bD = '±5%'});
const bDargintiu = document.getElementById('bD-argintiu').addEventListener('click',function(){bD = '±10%'});

function rezultat(){
    valoare = bA+bB+bC+'kΩ'+bD;
    valoare_afisare =  document.createElement('P');
    valoare_afisare.innerHTML = valoare;
    document.body.appendChild(valoare_afisare);
    valoare_afisare.style.cssText = 'position: absolute; top: 70vh; left: 10vw; height:5%; width: 15%; font-size:2vw;z-index:2;color:darkgreen;';
    return(valoare);
}