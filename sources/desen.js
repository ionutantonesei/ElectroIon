var culoare_rezistenta_1 = document.querySelector('#culori_rezistenta1').style.cssText;
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

buton1.addEventListener('click',function(){
    if (intrare1.value =='negru'){
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: black;';
    }
    else if (intrare1.value =='maro'){
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: brown;';
    }
    else if (intrare1.value =='rosu'){
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: red;';
    }
    else if (intrare1.value =='portocaliu'){
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: orange;';
    }
    else if (intrare1.value =='galben'){
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: yellow;';
    }
    else if (intrare1.value =='verde'){
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: green;';
    }
    else if (intrare1.value =='albastru'){
    document.querySelector('#culori_rezistenta1').style.cssText = 'background: blue;';
    }
    else {
        alert('Valoare invalida');
    }
})

buton2.addEventListener('click',function(){
    if (intrare2.value =='negru'){
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: black;';
    }
    else if (intrare2.value =='maro'){
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: brown;';
    }
    else if (intrare2.value =='rosu'){
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: red;';
    }
    else if (intrare2.value =='portocaliu'){
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: orange;';
    }
    else if (intrare2.value =='galben'){
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: yellow;';
    }
    else if (intrare2.value =='verde'){
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: green;';
    }
    else if (intrare2.value =='albastru'){
    document.querySelector('#culori_rezistenta2').style.cssText = 'background: blue;';
    }
    else{
        alert('Valoare invalida!');
    }
})

buton3.addEventListener('click',function(){
    if (intrare3.value =='negru'){
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: black;';
    }
    else if (intrare3.value =='maro'){
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: brown;';
    }
    else if (intrare3.value =='rosu'){
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: red;';
    }
    else if (intrare3.value =='portocaliu'){
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: orange;';
    }
    else if (intrare3.value =='galben'){
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: yellow;';
    }
    else if (intrare3.value =='verde'){
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: green;';
    }
    else if (intrare3.value =='albastru'){
    document.querySelector('#culori_rezistenta3').style.cssText = 'background: blue;';
    }
    else{
        alert('Valoare invalida!');
    }
})

buton4.addEventListener('click',function(){
    if (intrare4.value =='negru'){
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: black;';
    }
    else if (intrare4.value =='maro'){
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: brown;';
    }
    else if (intrare4.value =='rosu'){
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: red;';
    }
    else if (intrare4.value =='portocaliu'){
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: orange;';
    }
    else if (intrare4.value =='galben'){
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: yellow;';
    }
    else if (intrare4.value =='verde'){
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: green;';
    }
    else if (intrare4.value =='albastru'){
    document.querySelector('#culori_rezistenta4').style.cssText = 'background: blue;';
    }
    else{
        alert('Valoare invalida!');
    }
})