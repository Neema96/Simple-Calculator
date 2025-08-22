let result = null;

function getInput(){
    let input = parseFloat(document.getElementById('input').value);
    document.getElementById('input').value = '';
    return isNaN(input) ? 0 : input;
}

function add(){
    let num = getInput();
    result = result === null ? num : result + num;
    updateResult();
}

function subtract() {
    let num = getInput();
    result = result === null ? num : result - num;
    updateResult();
}

function multiply() {
    let num = getInput();
    result = result === null ? num : result * num;
    updateResult();
}

function square() {
    let num = getInput();
    result = num ** 2;
    updateResult();
}

function divide() {
    let num = getInput();
    if(num === 0){
        alert("Cannot divide by zero!");
        return;
    }
    result = result === null ? num : result / num;
    updateResult(); 
}

function cube() {
    let num = getInput();
    result = num ** 3;
    updateResult();
}

function clearCalculator() {
    result = null;
    document.getElementById('input').value = '';
    document.getElementById('result').innerText = 0;
}

function updateResult() {
    document.getElementById('result').innerText = result;
}