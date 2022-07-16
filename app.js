const buttons = document.querySelectorAll(".buttons .button");
const resultDisplay = document.querySelector(".display .result");

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
        default: break;
    }

    if(!isNaN(dataValue)) {
        resultDisplay.textContent = dataValue;
    }
}