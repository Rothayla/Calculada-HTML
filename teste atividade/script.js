let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value
            .replace(/✖️/g, '*')
            .replace(/➗/g, '/')
            .replace(/➕/g, '+')
            .replace(/➖/g, '-');

        if (expression.includes('/0')) {
            throw new Error("Divisão por zero não é permitida!");
        }

        let result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Erro!";
        setTimeout(clearDisplay, 1500);
    }
}