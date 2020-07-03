const display = document.querySelector('.display');
    document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener('click', digitPressed));

    function digitPressed(ev) {
    display.value += ev.target.innerText
}


document.querySelectorAll('.opers button')
    .forEach(button => button.addEventListener('click', opersPressed));

function opersPressed(ev) {
    display.value += ev.target.innerText
}

document.querySelector('.equals').addEventListener('click', calculate);
function calculate(){
    display.value = eval(display.value);
}

document.querySelector('.clear').addEventListener('click', clean);
function clean(){
    display.value = "";
}


document.querySelector('.decimal').addEventListener('click', decimal);
function decimal(ev) {
const dec = ev.target.innerText.lastIndexOf('.');
if (dec === -1) {
    display.value +='.';
  } }


  
//   let dec = display.value.lastIndexOf('.');
//     if (dec!== -1) {
//     display.value += '';
//   } else {
//     display.value += '.';
// }  
