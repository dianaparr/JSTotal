let num1, num2, number, min, max;

function showResult(result) {
    document.getElementById('result').value = result;
}

function sum() {
    num1 = +document.getElementById('number1').value;
    num2 = +document.getElementById('number2').value;
    showResult(num1 + num2);
}

function subs() {
    num1 = +document.getElementById('number1').value;
    num2 = +document.getElementById('number2').value;
    showResult(num1 - num2);
}

function mult() {
    num1 = +document.getElementById('number1').value;
    num2 = +document.getElementById('number2').value;
    showResult(num1 * num2);
}

function div() {
    num1 = +document.getElementById('number1').value;
    num2 = +document.getElementById('number2').value;
    showResult(num1 / num2);
}

function sqrt() {
    number = +document.getElementById('number2').value;
    showResult(Math.sqrt(number));
}

function pow() {
    num1 = +document.getElementById('number1').value;
    num2 = +document.getElementById('number2').value;
    showResult(Math.pow(num1, num2));
}

function abs() {
    number = +document.getElementById('number2').value;
    showResult(Math.abs(number));
}

function random() {
    min = +document.getElementById('number1').value;
    max = +document.getElementById('number2').value;
    max = max + 1;
    showResult(Math.floor(Math.random() * (max - min) + min));
}

function round() {
    result = +document.getElementById('result').value;
    showResult(Math.round(result))
}

function ceil() {
    result = +document.getElementById('result').value;
    showResult(Math.ceil(result))
}

function floor() {
    result = +document.getElementById('result').value;
    showResult(Math.floor(result))
}
