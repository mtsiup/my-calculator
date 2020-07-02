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
function decimal() {
  let dec = display.value.IndexOf('.');
    if (dec!== '.') {
    display.value += '.';
  } else {
decimal(display.value);
}  }




