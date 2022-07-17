
const buttons = document.querySelectorAll(".buttons .button, .display .clear");
const resultDisplay = document.querySelector(".display .result");
console.log(buttons);

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    switch(operator){
        case "add": add(a, b); break;
        case "subtract": subtract(a, b); break;
        case "multiply": multiply(a, b); break;
        case "divide": divide(a, b); break;
        default: return;
    }
}


for(let button of buttons){
    let dataValue = button.getAttribute("data-value");
    button.addEventListener('click', () => clickButton(dataValue));
}

function clickButton(dataValue){

    switch(dataValue){
        case "divide": break;
        case "multiply": break;
        case "add": break;
        case "subtract": break;
        case "clear": clearDisplay(); break;
        default: break;
    }

    if(!isNaN(dataValue)) {
        if(resultDisplay.textContent === "0") resultDisplay.textContent = "";
        resultDisplay.textContent += dataValue;
    }
}

function clearDisplay(){
    resultDisplay.textContent = 0;
}