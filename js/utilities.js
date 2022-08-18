function inputNumber(elementID, number){
    const element = document.getElementById(elementID);
    const elementValue = element.innerText;
    
    element.innerText = elementValue + number;
}


function add(){
    const element = document.getElementById('first-number');
    const elementValue = element.innerText;
    const plusIndex = elementValue.indexOf("+");
    const firstNumberString = elementValue.slice(0, plusIndex);
    const secondNumberString = elementValue.slice(plusIndex+1);
    const firstNumber = parseFloat(firstNumberString);
    const secondNumber = parseFloat(secondNumberString);
    const result = firstNumber + secondNumber;
    const resultElement = document.getElementById('result');
    resultElement.innerText = result;
    
}
function minus(){
    const element = document.getElementById('first-number');
    const elementValue = element.innerText;
    const plusIndex = elementValue.indexOf("-");
    const firstNumberString = elementValue.slice(0, plusIndex);
    const secondNumberString = elementValue.slice(plusIndex+1);
    const firstNumber = parseFloat(firstNumberString);
    const secondNumber = parseFloat(secondNumberString);
    const result = firstNumber - secondNumber;
    const resultElement = document.getElementById('result');
    resultElement.innerText = result;
    
}
function divide(){
    const element = document.getElementById('first-number');
    const elementValue = element.innerText;
    const plusIndex = elementValue.indexOf("/");
    const firstNumberString = elementValue.slice(0, plusIndex);
    const secondNumberString = elementValue.slice(plusIndex+1);
    const firstNumber = parseFloat(firstNumberString);
    const secondNumber = parseFloat(secondNumberString);
    const result = firstNumber / secondNumber;
    const resultElement = document.getElementById('result');
    resultElement.innerText = result;
    
}
function mult(){
    const element = document.getElementById('first-number');
    const elementValue = element.innerText;
    const plusIndex = elementValue.indexOf("x");
    const firstNumberString = elementValue.slice(0, plusIndex);
    const secondNumberString = elementValue.slice(plusIndex+1);
    const firstNumber = parseFloat(firstNumberString);
    const secondNumber = parseFloat(secondNumberString);
    const result = firstNumber * secondNumber;
    const resultElement = document.getElementById('result');
    resultElement.innerText = result;
    
}

function percent(){
    const element = document.getElementById('first-number');
    const elementValue = element.innerText;
    const plusIndex = elementValue.indexOf("%");
    const firstNumberString = elementValue.slice(0, plusIndex);
    const secondNumberString = elementValue.slice(plusIndex+1);
    const firstNumber = parseFloat(firstNumberString);
    const secondNumber = parseFloat(secondNumberString);

    const percent = (secondNumber * firstNumber)/100;
    const resultElement = document.getElementById('result');
    resultElement.innerText = percent;

}