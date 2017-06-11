


// creates all variables needed
var button = document.querySelectorAll('button');
var str = '';


// add a 'click' event listener to every button
for (let i = 0; i < button.length; i++) {

  
button[i].addEventListener('click', function(){


    // if equal value pushed run eval()
    if (button[i].value === "=") {
        console.log(button[i].value);
      display.innerHTML = eval(str);



      // if c value pushed clear display
    } else if (button[i].value === 'c') {
       str = "";
       console.log(str);
       display.innerHTML = str;

         // else if any buttons with a value of 0-9 is pressed store it in string
    } else {

      str += button[i].value;
       display.innerHTML = str;
    }

  });

}
