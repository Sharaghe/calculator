
const buttons = document.querySelectorAll(".buttons .button, .display .clear");
const resultDisplay = document.querySelector(".display .result");
let leftValue = 0;
let rightValue;
let selectedOperator;
let nextClickResets = false;
let lockDecimalButton = false;

const ADD = "add";
const SUBTRACT = "subtract";
const MULTIPLY = "multiply";
const DIVIDE = "divide";
const EQUALS = "equals";

const possibleOperations = [ADD, SUBTRACT, MULTIPLY, DIVIDE];

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
    
    if(possibleOperations.includes(dataValue)){
        operationClicked(dataValue); 
    }


    if(dataValue === 'clear'){
        clearDisplay();
    }

    if(dataValue === EQUALS && possibleOperations.includes(selectedOperator)){
        showResult();
        nextClickResets = true;
    }

    let decimalButtonClicked = (dataValue === '.' && !lockDecimalButton);

    if(!isNaN(dataValue) || decimalButtonClicked) {

        console.log("entered condition");

        if((resultDisplay.textContent === "0" || nextClickResets) ) { 

            if (!decimalButtonClicked){
                resultDisplay.textContent = "";
            } else {
                resultDisplay.textContent = "0";
            }
            nextClickResets = false;
        }

        resultDisplay.textContent += dataValue; 

        if(decimalButtonClicked) {
            lockDecimalButton = true;
        }

        if(possibleOperations.includes(selectedOperator)){
            rightValue = Number(resultDisplay.textContent);    
        } else {
            leftValue = Number(resultDisplay.textContent);
        }
    }
}

function operationClicked(dataValue){
    
    if(possibleOperations.includes(selectedOperator) && rightValue !== undefined){
        showResult();
    } 

    selectedOperator = dataValue;
    nextClickResets = true;
}

function clearDisplay(){
    resultDisplay.textContent = 0;
    leftValue = 0;
    rightValue = undefined;
    selectedOperator = undefined;
}

function showResult(){
    resultDisplay.textContent = operate(selectedOperator, leftValue, rightValue);
    leftValue = Number(resultDisplay.textContent);
    selectedOperator = undefined;
    rightValue = undefined;
    lockDecimalButton = false;
    nextClickResets = false;
}
