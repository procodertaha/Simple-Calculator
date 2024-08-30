currentNumber = ""
previousNumber = ""
operation = undefined



function appendNumber(number){
    if (number==="0" && currentNumber==="0") return;
    
    currentNumber += number
    updateDisplay()
}


function updateDisplay() {
    document.getElementById("display").innerText = currentNumber

}
function clearDisplay(){
    currentNumber = ""
    previousNumber = ""
    operation = undefined
    updateDisplay()
}

function chooseOperation(op){
if (currentNumber==="") return

if(previousNumber !== ""){
    compute()
}

operation = op
previousNumber = currentNumber
currentNumber = ""
// updateDisplay()
}

function compute(){
let computation;
const prev = parseFloat(previousNumber)
const curr = parseFloat(currentNumber)

if (isNaN(prev) && isNaN(curr) ) return;

switch (operation){
case "+" :
computation = prev + curr
break;
case "-" :
computation = prev - curr
break;
case "*" :
computation = prev * curr
break;
case "/" :
computation = prev / curr
break;
}
currentNumber = computation
previousNumber = ""
operation = undefined
updateDisplay()
}

let a= document.querySelector(".light")
let btn = document.querySelector(".light-button")
let flag = 0
btn.addEventListener("click", function(){
    if( flag==0){
    a.style.backgroundColor = "yellow"
    a.style.opacity = 1
    flag = 1
    }
    else{
        if(flag==1)
        a.style.backgroundColor = "yellow"
        a.style.opacity = 0
        flag = 0

    }

})

