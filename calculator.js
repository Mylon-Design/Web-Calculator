let displayValue = '';

// funçao chamada quando um botão é clicado na calculator e que armazena o seu valor.
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}


// clear calculator
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculateResult() { 
    try {
        let res = eval(displayValue); //eval - usada para calcular a exp inserida
        document.getElementById('display').value = res;
        displayValue = String(res);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

    // do botao de porcentagem
function appendToDisplay(value) {
    if (value === '%') {
        displayValue += '/100';
    } else { 
        displayValue += value;
    }
    document.getElementById('display').value = displayValue;
}

function calculateResult(){
    try {
        let res;
        if (displayValue.includes('%')) {
            let valueWithoutPercentage = displayValue.replace('%', '');
            res = eval(valueWithoutPercentage) / 100;
        } else {
            res = eval(displayValue);
        }
        document.getElementById('display').value = res;
        displayValue = String(res);
    } catch (error) {
        document.getElementById(displayValue).value = 'Error';
    }
}

