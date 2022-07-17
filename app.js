
const buttons = document.querySelectorAll(".buttons .button, .display .clear");
const resultDisplay = document.querySelector(".display .result");
let leftValue, rightValue = 0;
let selectedOperator;
let nextClickResets = false;

const ADD = "add";
const SUBTRACT = "subtract";
const MULTIPLY = "multiply";
const DIVIDE = "divide";

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
        case ADD: return add(a, b); break;
        case SUBTRACT: return subtract(a, b); break;
        case MULTIPLY: return multiply(a, b); break;
        case DIVIDE: return divide(a, b); break;
        default: return;
    }
}


for(let button of buttons){
    let dataValue = button.getAttribute("data-value");
    button.addEventListener('click', () => clickButton(dataValue));
}

function clickButton(dataValue){

    switch(dataValue){
        case DIVIDE: case MULTIPLY: case ADD: case SUBTRACT: operationClicked(dataValue); break;
        case "clear": clearDisplay(); break;
        case "equals": showResult(); break;
        default: break;
    }

    if(!isNaN(dataValue)) {
        if(resultDisplay.textContent === "0" || nextClickResets) { 
            resultDisplay.textContent = "";
            nextClickResets = false;
        }
        resultDisplay.textContent += dataValue;
    }
}

function operationClicked(dataValue){
    leftValue = Number(resultDisplay.textContent);
    selectedOperator = dataValue;
    nextClickResets = true;
}

function clearDisplay(){
    resultDisplay.textContent = 0;
}

function showResult(){
    rightValue = Number(resultDisplay.textContent);
    resultDisplay.textContent = operate(selectedOperator, leftValue, rightValue);
}