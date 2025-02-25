let firstInput="";
let operator="";
let secondInput="";
let result="";


let displayValue=firstInput;

let input=document.getElementById("display")

function buttonClick(event){
  console.log(event.target.innerText);

  console.log(input)
  input.value+=event.target.innerText;
}


function clearDisplay(){
  document.getElementById('display').value=""
}


function opertorClick(event){
  firstInput=document.getElementById("display").value
  console.log(firstInput)
  clearDisplay();
  console.log(document.getElementById("display").value)
  operator=event.target.innerText;

}


function evaluateResult(event){
  secondInput=document.getElementById("display").value;
  console.log(secondInput);
  
  console.log(firstInput,operator,secondInput,"operators");



      if(operator==="+"){
        result = Number(firstInput)+Number(secondInput);
        document.getElementById("display").value=result;
      }
      
      if(operator=="-"){
        result=parseInt((firstInput)-(secondInput))
        console.log(result)
        document.getElementById("display").value=result
      }


      if(operator==="/"){
        result=parseInt((firstInput)/(secondInput))
        console.log(result)
        document.getElementById("display").value=result
      }

      if(operator==="*"){
        result=parseInt((firstInput)*(secondInput))
        console.log(result)
        document.getElementById("display").value=result
      }
}
