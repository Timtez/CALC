const calculator = {
    displayValue: '0',
    firstNum: null,
    waitingforSecondNum: false,
    operator: null
};

function calculate(firstOperand, secondOperand, operator){
    if(operator === "+"){
        return firstOperand + secondOperand;
    } else if(operator === "-"){
        return firstOperand - secondOperand;
    } else if(operator === "x"){
        return firstOperand * secondOperand;
    } else if(operator === "/"){
        return firstOperand / secondOperand;
    }
    return secondOperand;
}

function deleteEntry(){
    const {displayValue} = calculator;

    calculator.displayValue = displayValue.substring(0, calculator.displayValue.length - 1);

    console.log(calculator);
}

function resetCalculator(){
    calculator.firstNum = null;
    calculator.displayValue = '0';
    calculator.waitingforSecondNum = false;
    calculator.operator = null;
    console.log(calculator);
}

function inputDigits(digit){
    // if the displayValue property is strictly equal to 0, 
    // overwrite its value with the value of digit, else append digit to the displayValue property

    // if(displayValue === "0"){
    //     calculator.displayValue = digit;
    // } else {
    //     calculator.displayValue = digit + displayValue;
    // }

    const {displayValue, waitingforSecondNum} = calculator;
    if(waitingforSecondNum === true){
        calculator.displayValue = digit;
        calculator.waitingforSecondNum = false;
    } else{
        calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
    }
    console.log(calculator);
};

function inputDecimalPt(dot){
    if(calculator.waitingforSecondNum = true){
        calculator.displayValue = "0.";
        calculator.waitingforSecondNum = false;
    }

    if(!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot;
    };
};

function handleOp(nextoperator){
    const {firstNum, displayValue, operator} = calculator;

    const inputValue = parseFloat(displayValue);

    if(firstNum === null && !isNaN(inputValue)){
        calculator.firstNum = inputValue;
    }

    if(operator && calculator.waitingforSecondNum){
        calculator.operator = nextoperator;
        console.log(calculator);
        return;
    }

    if(operator){
        const result = calculate(firstNum, inputValue, operator);
        // calculator.displayValue = String(result);
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstNum = result;
    }
    
    calculator.waitingforSecondNum = true;
    calculator.operator = nextoperator;
    console.log(calculator);
}

function updateDisplay(){
    // const displayValue = document.querySelector(".calc-display-scr");
    
    if(calculator.displayValue.length >= 13){
        document.querySelector("#display").innerHTML = `<h1 style= "font-size: 35px">${calculator.displayValue}</h1>`;
        return;
    } else {
        document.querySelector("#display").innerHTML = `<h1 style= "font-size: 45px">${calculator.displayValue}</h1>`;
        return;
    }
};

const btn = document.querySelector(".calc-keys-container").addEventListener("click", (e) =>{
    const {target} = e;
    const {value} = target;

    if(!target.matches("button")){
        return;
    }

    switch (value) {
        case '+':
        case '-':
        case 'x':
        case '/':
        case '=':
        handleOp(value);
        break;

        case '.':
            inputDecimalPt(value);
            break;

            case 'delete':
                deleteEntry();
                break;

                case 'RESET':
                    resetCalculator();
                    break;

    
        default:
            //check if key is an integer
            if(Number.isInteger(parseFloat(value))){
                inputDigits(value);
            }
        }

        updateDisplay();
    }
    )    

    // if(target.classList.contains("operator")){
    //     // console.log("operator", target.value);
    //     handleOp(target.value); 
    //     updateDisplay();
    //     return;
    // }

    // if(target.classList.contains("delete")){
    //     deleteEntry(target.value);
    //     updateDisplay();
    //     return;
    // }

    // if(target.classList.contains("reset")){
    //     resetCalculator(target.value);
    //     updateDisplay();
    //     return;
    // }

    // if(target.classList.contains("decimal")){
    //     inputDecimalPt(target.value);
    //     updateDisplay();
    //     return;
    // }

    // if(target.classList.contains("equal")){
    //     console.log("equal", target.value);
    //     return;
    // }

    // inputDigits(target.value);
    // updateDisplay();
// }
