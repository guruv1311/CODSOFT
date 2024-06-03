let input = "";
function handleButtonClick(value) {
    input += value;
    updateDisplay();
}
function handleCalculate() {
    try {
        const result = window.eval(input);
        input = result.toString();
    } catch (error) {
        input = "Error";
    }
    updateDisplay();
}
function backspace() {
    input = input.slice(0, -1);
    updateDisplay();
}
function handleClear() {
    input = "";
    updateDisplay();
}
function updateDisplay() {
    document.getElementById('calculator-display').innerText = input;
}