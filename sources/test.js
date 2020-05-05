let buton_intrebare_1 = document.getElementById('buton_intrebare_1');
const intrebare = document.getElementById('intrebare_1');
const variante = document.getElementById('variante_1');

buton_intrebare_1.addEventListener('click',function(){
    let intrare_raspuns_1 = document.getElementById('raspuns_1').checked;
    let intrare_raspuns_2 = document.getElementById('raspuns_2').checked;
    let intrare_raspuns_3 = document.getElementById('raspuns_3').checked;

    if(intrare_raspuns_1 == true && intrare_raspuns_2 == false && intrare_raspuns_3 == false){
        alert('CORECT');
    }
    else{
        alert('GRESIT');
    }
    intrebare_1.remove();
    variante_1.remove();
})