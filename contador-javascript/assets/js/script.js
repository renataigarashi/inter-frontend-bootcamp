let currentNumber = document.getElementById('currentNumber');
let cont = 0;
let buttonSub = document.getElementById('subt');
let buttonAdd = document.getElementById('adic');



buttonAdd.addEventListener("click", increment);

buttonSub.addEventListener("click", decrement);


function increment(){
    cont++;
    currentNumber.innerHTML = cont;
    if (cont >= 0) {
        currentNumber.style.color = "rgb(34, 139, 2)"
    }
}

function decrement(){ 
    cont--;
    currentNumber.innerHTML = cont;
    if (cont < 0 ){
        currentNumber.style.color = "red"
    } 
}
























