const culoare_rezistenta_1 = document.querySelector('#culori_rezistenta1').style;
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
const buton4 = document.getElementById('schimbare_culoare_buton_4');
var valoare_1 = 0;
var valoare_2 = 0;
var valoare_3 = 0;
var multiplicator = 1;
var valoare = 0;

buton1.addEventListener('click',function(){
    if (intrare1.value =='negru'){
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: black;';
    return valoare_1;
    }
    else if (intrare1.value =='maro'){
        valoare_1 = 1;
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: brown;';
    return valoare_1;
    }
    else if (intrare1.value =='rosu'){
        valoare_1 = 2;
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: red;';
    return valoare_1;
    }
    else if (intrare1.value =='portocaliu'){
        valoare_1 = 3;
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: orange;';
    return valoare_1;
    }
    else if (intrare1.value =='galben'){
        valoare_1 = 4;
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: yellow;';
    return valoare_1;
    }
    else if (intrare1.value =='verde'){
        valoare_1 = 5;
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: green;';
    return valoare_1;
    }
    else if (intrare1.value =='albastru'){
        valoare_1 = 6;
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: blue;';
    return valoare_1;
    }
    else if (intrare1.value =='mov'){
        valoare_1 = 7;
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: purple;';
    return valoare_1;
    }
    else if (intrare1.value =='gri'){
        valoare_1 = 8;
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: gray;';
    return valoare_1;
    }
    else if (intrare1.value =='alb'){
        valoare_1 = 9;
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: white;';
    return valoare_1;
    }
    else {
        alert('Valoare invalida');
    }
})
buton2.addEventListener('click',function(){
    if (intrare2.value =='negru'){
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: black;';
    return valoare_2;
    }
    else if (intrare2.value =='maro'){
        valoare_2 = 1;
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: brown;';
    return valoare_2;
    }
    else if (intrare2.value =='rosu'){
        valoare_2 = 2;
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: red;';
    return valoare_2;
    }
    else if (intrare2.value =='portocaliu'){
        valoare_2 = 3;
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: orange;';
    return valoare_2;
    }
    else if (intrare2.value =='galben'){
        valoare_2 = 4;
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: yellow;';
    return valoare_2;
    }
    else if (intrare2.value =='verde'){
        valoare_2 = 5;
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: green;';
    return valoare_2;
    }
    else if (intrare2.value =='albastru'){
        valoare_2 = 6;
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: blue;';
    return valoare_2;
    }
    else if (intrare2.value =='mov'){
        valoare_2 = 7;
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: purple;';
    return valoare_2;
    }
    else if (intrare2.value =='gri'){
        valoare_2 = 8;
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: gray;';
    return valoare_2;
    }
    else if (intrare2.value =='alb'){
        valoare_2 = 9;
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: white;';
    return valoare_2;
    }
    else {
        alert('Valoare invalida');
    }
})
buton3.addEventListener('click',function(){
    if (intrare3.value =='negru'){
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: black;';
    return valoare_3;
    }
    else if (intrare3.value =='maro'){
        valoare_3 = 1;
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: brown;';
    return valoare_3;
    }
    else if (intrare3.value =='rosu'){
        valoare_3 = 2;
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: red;';
    return valoare_3;
    }
    else if (intrare3.value =='portocaliu'){
        valoare_3 = 3;
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: orange;';
    return valoare_3;
    }
    else if (intrare3.value =='galben'){
        valoare_3 = 4;
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: yellow;';
    return valoare_3;
    }
    else if (intrare3.value =='verde'){
        valoare_3 = 5;
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: green;';
    return valoare_3;
    }
    else if (intrare3.value =='albastru'){
        valoare_3 = 6;
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: blue;';
    return valoare_3;
    }
    else if (intrare3.value =='mov'){
        valoare_3 = 7;
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: purple;';
    return valoare_3;
    }
    else if (intrare3.value =='gri'){
        valoare_3 = 8;
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: gray;';
    return valoare_3;
    }
    else if (intrare3.value =='alb'){
        valoare_3 = 9;
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: white;';
    return valoare_3;
    }
    else {
        alert('Valoare invalida');
    }
})
buton4.addEventListener('click',function(){
    if (intrare4.value =='negru'){
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: black;';
    return multiplicator;
    }
    else if (intrare4.value =='maro'){
        multiplicator = 10;
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: brown;';
    return multiplicator;
    }
    else if (intrare4.value =='rosu'){
        multiplicator = 100;
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: red;';
    return multiplicator;
    }
    else if (intrare4.value =='portocaliu'){
        multiplicator = 1000;
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: orange;';
    return multiplicator;
    }
    else if (intrare4.value =='galben'){
        multiplicator = 10000;
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: yellow;';
    return multiplicator;
    }
    else if (intrare4.value =='verde'){
        multiplicator = 100000;
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: green;';
    return multiplicator;
    }
    else if (intrare4.value =='albastru'){
        multiplicator = 1000000;
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: blue;';
    return multiplicator;
    }
    else if (intrare4.value =='mov'){
        multiplicator = 10000000;
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: purple;';
    return multiplicator;
    }
    else if (intrare4.value =='gri'){
        multiplicator = 10000000;
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: gray;';
    return multiplicator;
    }
    else if (intrare4.value =='alb'){
        multiplicator = 100000000;
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: white;';
    return multiplicator;
    }
    else {
        alert('Valoare invalida');
    }
})

function rezultat(){
    valoare = (valoare_1+valoare_2+valoare_3)*multiplicator;
    valoare_afisare =  document.createElement('P');
    valoare_afisare.innerHTML = valoare+'kΩ';
    document.body.appendChild(valoare_afisare);
    valoare_afisare.style.cssText = 'position: absolute; top: 50%; left: 30%; height: 5%; width: 20%;'
    return(valoare);
}

function removeElement() {
    var element = document.getElementsByClassName('afisare_valoare_rezistenta').innerHTML;
    return(element);
}