function validateInputs() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;


    if (num1 === '' || num2 === '') {
        const result = document.getElementById('result');
        result.textContent = 'Eroare: Completati ambele campuri!';
        result.className = 'error';
        return false;
    }
    return true;
}


function adunare() {
    if (validateInputs()) {
        const num1 =Number(document.getElementById('num1').value);
        const num2 = Number(document.getElementById('num2').value);
        const result = document.getElementById('result');

        result.textContent = 'Rezultatul: ' + (num1 + num2);
        result.className = 'success';
    }
}

function scadere() {
    if (validateInputs()) {
        const num1 =Number(document.getElementById('num1').value);
        const num2 = Number(document.getElementById('num2').value);
        const result = document.getElementById('result');

        result.textContent = 'Rezultatul: ' + (num1 - num2);
        result.className = 'success';
    }
}

function inmultire() {
    if (validateInputs()) {
        const num1 =Number(document.getElementById('num1').value);
        const num2 = Number(document.getElementById('num2').value);
        const result = document.getElementById('result');

        result.textContent = 'Rezultatul: ' + (num1 * num2);
        result.className = 'success';
    }
}


function impartire() {
    if (validateInputs()) {
        const num1 =Number(document.getElementById('num1').value);
        const num2 = Number(document.getElementById('num2').value);

        if (num2 != 0) {
            const result = document.getElementById('result');
            result.textContent = 'Rezultatul: ' + (num1 / num2);
            result.className = 'success';
        } else {
            const result = document.getElementById('result');
            result.textContent = 'Eroare: Impartire la zero!';
            result.className = 'error';
        }
    }
}