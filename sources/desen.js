/*const culoare_rezistenta_1 = document.querySelector('#culori_rezistenta1').style;
const culoare_rezistenta_2 = document.querySelector('#culori_rezistenta2').style;
const culoare_rezistenta_3 = document.querySelector('#culori_rezistenta3').style;
const culoare_rezistenta_4 = document.querySelector('#culori_rezistenta4').style;
const intrare1 = document.getElementById('schimbare_culoare_1');
const intrare2 = document.getElementById('schimbare_culoare_2');
const intrare3 = document.getElementById('schimbare_culoare_3');
const intrare4 = document.getElementById('schimbare_culoare_4');
const buton1 = document.getElementById('schimbare_culoare_buton_1');
const buton2 = document.getElementById('schimbare_culoare_buton_2');
const buton3 = document.getElementById('schimbare_culoare_buton_3');
const buton4 = document.getElementById('schimbare_culoare_buton_4');*/
var valoare = 0;
var bA = 0;
var bB = 0;
var bC = 0;
var bD = 0;

var bAnegru = document.getElementById('bA-negru').addEventListener('click',function(){bA = 0});
var bAmaro = document.getElementById('bA-maro').addEventListener('click',function(){bA = 1});
var bArosu = document.getElementById('bA-rosu').addEventListener('click',function(){bA = 2});
var bAportocaliu = document.getElementById('bA-portocaliu').addEventListener('click',function(){bA = 3});
var bAgalben = document.getElementById('bA-galben').addEventListener('click',function(){bA = 4});
var bAverde = document.getElementById('bA-verde').addEventListener('click',function(){bA = 5});
var bAalbastru = document.getElementById('bA-albastru').addEventListener('click',function(){bA = 6});
var bApurpuriu = document.getElementById('bA-purpuriu').addEventListener('click',function(){bA = 7});
var bAgri = document.getElementById('bA-gri').addEventListener('click',function(){bA = 8});
var bAalb = document.getElementById('bA-alb').addEventListener('click',function(){bA = 9});

var bBnegru = document.getElementById('bB-negru').addEventListener('click',function(){bB = 0});
var bBmaro = document.getElementById('bB-maro').addEventListener('click',function(){bB = 1});
var bBrosu = document.getElementById('bB-rosu').addEventListener('click',function(){bB = 2});
var bBportocaliu = document.getElementById('bB-portocaliu').addEventListener('click',function(){bB = 3});
var bBgalben = document.getElementById('bB-galben').addEventListener('click',function(){bB = 4});
var bBverde = document.getElementById('bB-verde').addEventListener('click',function(){bB = 5});
var bBalbastru = document.getElementById('bB-albastru').addEventListener('click',function(){bB = 6});
var bBpurpuriu = document.getElementById('bB-purpuriu').addEventListener('click',function(){bB = 7});
var bBgri = document.getElementById('bB-gri').addEventListener('click',function(){bB = 8});
var bBalb = document.getElementById('bB-alb').addEventListener('click',function(){bB = 9});

var bCnegru = document.getElementById('bC-negru').addEventListener('click',function(){bC = 0});
var bCmaro = document.getElementById('bC-maro').addEventListener('click',function(){bC = 1});
var bCrosu = document.getElementById('bC-rosu').addEventListener('click',function(){bC = 2});
var bCportocaliu = document.getElementById('bC-portocaliu').addEventListener('click',function(){bC = 3});
var bCgalben = document.getElementById('bC-galben').addEventListener('click',function(){bC = 4});
var bCverde = document.getElementById('bC-verde').addEventListener('click',function(){bC = 5});
var bCalbastru = document.getElementById('bC-albastru').addEventListener('click',function(){bC = 6});
var bCpurpuriu = document.getElementById('bC-purpuriu').addEventListener('click',function(){bC = 7});
var bCgri = document.getElementById('bC-gri').addEventListener('click',function(){bC = 8});
var bCalb = document.getElementById('bC-alb').addEventListener('click',function(){bC = 9});

var bDnegru = document.getElementById('bD-negru').addEventListener('click',function(){bD = 1});
var bDmaro = document.getElementById('bD-maro').addEventListener('click',function(){bD = 10});
var bDrosu = document.getElementById('bD-rosu').addEventListener('click',function(){bD = 100});
var bDportocaliu = document.getElementById('bD-portocaliu').addEventListener('click',function(){bD = 1000});
var bDgalben = document.getElementById('bD-galben').addEventListener('click',function(){bD = 10000});
var bDverde = document.getElementById('bD-verde').addEventListener('click',function(){bD = 100000});
var bDalbastru = document.getElementById('bD-albastru').addEventListener('click',function(){bD = 1000000});
var bDpurpuriu = document.getElementById('bD-purpuriu').addEventListener('click',function(){bD = 10000000});
var bDgri = document.getElementById('bD-gri').addEventListener('click',function(){bD = 100000000});
var bDalb = document.getElementById('bD-alb').addEventListener('click',function(){bD = 1000000000});
function main(){
    switch (bA){
        case 0:
        document.querySelector('#culori_rezistenta1').style.cssText = 'background: black;';
        break;
        case 1:
        document.querySelector('#culori_rezistenta1').style.cssText = 'background: brown;';
        break;
        case 2:
        document.querySelector('#culori_rezistenta1').style.cssText = 'background: red;';
        break;
        case 3:
        document.querySelector('#culori_rezistenta1').style.cssText = 'background: orange;';
        break;
        case 4:
        document.querySelector('#culori_rezistenta1').style.cssText = 'background: yellow;';
        break;
        case 5:
        document.querySelector('#culori_rezistenta1').style.cssText = 'background: green;';
        break;
        case 6:
        document.querySelector('#culori_rezistenta1').style.cssText = 'background: blue;';
        break;
        case 7:
        document.querySelector('#culori_rezistenta1').style.cssText = 'background: purple;';
        break;
        case 8:
        document.querySelector('#culori_rezistenta1').style.cssText = 'background: gray;';
        break;
        case 9:
        document.querySelector('#culori_rezistenta1').style.cssText = 'background: white;';
        break;
        default:
            alert('Valoare invalida');
    }
    switch (bB){
        case 0:
        document.querySelector('#culori_rezistenta2').style.cssText = 'background: black;';
        break;
        case 1:
        document.querySelector('#culori_rezistenta2').style.cssText = 'background: brown;';
        break;
        case 2:
        document.querySelector('#culori_rezistenta2').style.cssText = 'background: red;';
        break;
        case 3:
        document.querySelector('#culori_rezistenta2').style.cssText = 'background: orange;';
        break;
        case 4:
        document.querySelector('#culori_rezistenta2').style.cssText = 'background: yellow;';
        break;
        case 5:
        document.querySelector('#culori_rezistenta2').style.cssText = 'background: green;';
        break;
        case 6:
        document.querySelector('#culori_rezistenta2').style.cssText = 'background: blue;';
        break;
        case 7:
        document.querySelector('#culori_rezistenta2').style.cssText = 'background: purple;';
        break;
        case 8:
        document.querySelector('#culori_rezistenta2').style.cssText = 'background: gray;';
        break;
        case 9:
        document.querySelector('#culori_rezistenta2').style.cssText = 'background: white;';
        break;
        default:
            alert('Valoare invalida');
        }
    switch (bC){
        case 0:
        document.querySelector('#culori_rezistenta3').style.cssText = 'background: black;';
        break;
        case 1:
        document.querySelector('#culori_rezistenta3').style.cssText = 'background: brown;';
        break;
        case 2:
        document.querySelector('#culori_rezistenta3').style.cssText = 'background: red;';
        break;
        case 3:
        document.querySelector('#culori_rezistenta3').style.cssText = 'background: orange;';
        break;
        case 4:
        document.querySelector('#culori_rezistenta3').style.cssText = 'background: yellow;';
        break;
        case 5:
        document.querySelector('#culori_rezistenta3').style.cssText = 'background: green;';
        break;
        case 6:
        document.querySelector('#culori_rezistenta3').style.cssText = 'background: blue;';
        break;
        case 7:
        document.querySelector('#culori_rezistenta3').style.cssText = 'background: purple;';
        break;
        case 8:
        document.querySelector('#culori_rezistenta3').style.cssText = 'background: gray;';
        break;
        case 9:
        document.querySelector('#culori_rezistenta3').style.cssText = 'background: white;';
        break;
        default:
            alert('Valoare invalida');
        }
    switch (bD){
        case 1:
        document.querySelector('#culori_rezistenta4').style.cssText = 'background: black;';
        break;
        case 10:
        document.querySelector('#culori_rezistenta4').style.cssText = 'background: brown;';
        break;
        case 100:
        document.querySelector('#culori_rezistenta4').style.cssText = 'background: red;';
        break;
        case 1000:
        document.querySelector('#culori_rezistenta4').style.cssText = 'background: orange;';
        break;
        case 10000:
        document.querySelector('#culori_rezistenta4').style.cssText = 'background: yellow;';
        break;
        case 100000:
        document.querySelector('#culori_rezistenta4').style.cssText = 'background: green;';
        break;
        case 1000000:
        document.querySelector('#culori_rezistenta4').style.cssText = 'background: blue;';
        break;
        case 10000000:
        document.querySelector('#culori_rezistenta4').style.cssText = 'background: purple;';
        break;
        case 100000000:
        document.querySelector('#culori_rezistenta4').style.cssText = 'background: gray;';
        break;
        case 1000000000:
        document.querySelector('#culori_rezistenta4').style.cssText = 'background: white;';
        break;
        default:
            alert('Valoare invalida');
        }}

function rezultat(){
    valoare = (bA+bB+bC)*bD;
    valoare_afisare =  document.createElement('P');
    valoare_afisare.innerHTML = valoare+'kΩ';
    document.body.appendChild(valoare_afisare);
    valoare_afisare.style.cssText = 'position: absolute; top: 50%; left: 30%; height: 5%; width: 20%;'
    return(valoare);
}