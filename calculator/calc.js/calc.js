
var upper= document.querySelector(".upper")
var sign= document.querySelector(".sign")
var lower= document.querySelector(".lower")

const numbersbutton = document.querySelectorAll(".num");
 numbersbutton.forEach(function(buttons){

  buttons.addEventListener('click', function(e){
    let value = e.target.dataset.num;
       lower.value+= value;
    

  })
 })

const operations = document.querySelectorAll(".operation");
 operations .forEach(function(operation){
     operation.addEventListener('click', function(e){
      let oper = e.target.dataset.operation;
      sign.value += oper;
      upper.value = lower.value;
      lower.value ="";
     })
 })

 function allclear(){
   sign.value= ""
   lower.value = ""
   upper.value = ""
 }

 function dele(){
  lower.value = lower. innerText.slice(0 , -1);
  if(lower== " "){
    sign.value = sign. innerText.slice(0 , -1);
  }
 }

function compute() {
  let result;
  const num1 = parseInt(upper.value);
  const num2 = parseInt(lower.value); 
  switch (sign.value){
   case '+':
     result = num1 + num2;
     break;
   case '-':
      result = num1 - num2;
      break;
   case '*':
        result = num1 * num2;
        break;
   case '/':
          result = num1 / num2;
          break;
    case '%':
            result = num1 % num2;
            break;
    default:
            return;
   };
   lower.value = result;
}

function equals(){
  compute(); 
}

