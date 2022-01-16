

let screen = document.querySelector('.value');
 buttons = document.querySelectorAll('span');
let screenValue = '';


buttons.forEach(function(button){
button.addEventListener('click', function(e){

   let buttonText = e.target.innerText;
console.log(buttonText)
    if(button.classList.contains("backspace")){
        var str = screenValue.length-1;
         screenValue = screenValue.slice(0, str);
         screen.value = screenValue;
    }else if(buttonText == 'C'){
         screenValue = "";
         screen.value = screenValue;
    }else if(buttonText == '='){
      screen.value = eval(screenValue);
     }
     else{
         screenValue += buttonText;
         screen.value = screenValue;
    }
        
})
})
