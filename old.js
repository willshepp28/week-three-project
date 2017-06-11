

var calc = document.getElementById('calculator-container');


// buttons
var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');


// operators
var clear = document.getElementById('clear');
var opAdd = document.getElementById('opAdd');
var opMult = document.getElementById('opMult');
var opSub = document.getElementById('opSub');
var opMinus = document.getElementById('opMinus');
var opDivide = document.getElementById('opDivide');
var equal = document.getElementById('equal');

var str = '';

console.log(typeof Number(btn7.value));


// Event Listeners
  btn0.addEventListener('click', function() {
    str += btn0.value;
    console.log(str);
    display.innerHTML = str;
  });

  btn1.addEventListener('click', function() {
    str += btn1.value;
    console.log(str);
    display.innerHTML = str;
  });

  btn2.addEventListener('click', function() {
    str += btn2.value;
    console.log(str);
    display.innerHTML = str;
  });

  btn3.addEventListener('click', function() {
    str += btn3.value;
    console.log(str);
    display.innerHTML = str;
  });

  btn4.addEventListener('click', function() {
    str += btn4.value;
    console.log(str);
    display.innerHTML = str;
  });

  btn5.addEventListener('click', function() {
    str += btn5.value;
    console.log(str);
    display.innerHTML = str;
  });

  btn6.addEventListener('click', function() {
    str += btn6.value;
    console.log(str);
    display.innerHTML = str;
  });

  btn7.addEventListener('click', function() {
    str += btn7.value;
    console.log(str);
    display.innerHTML = str;
  });

  btn8.addEventListener('click', function() {
    str += btn8.value;
    console.log(str);
    display.innerHTML = str;
  });

  btn9.addEventListener('click', function() {
    str += btn9.value;
    console.log(str);
    display.innerHTML = str;
  });


// operations
opAdd.addEventListener('click', function() {
  str += opAdd.value;
  console.log(str);
  display.innerHTML = str;
});

opSub.addEventListener('click', function() {
  str += opSub.value;
  console.log(str);
  display.innerHTML = str;
});


opDivide.addEventListener('click', function() {
  str += opDivide.value;
  console.log(str);
  display.innerHTML = str;
});

opMult.addEventListener('click', function() {
  str += opMult.value;
  console.log(str);
  display.innerHTML = str;
});

clear.addEventListener('click', function() {
  str = "";
  console.log(str);
  display.innerHTML = str;
});

equal.addEventListener('click', function() {

  display.innerHTML = eval(str);

});
