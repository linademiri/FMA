function updateCalculation(value) {
    const resultElement = document.getElementById("result");
    resultElement.textContent += value;
}

function calculateResult() {
    const resultElement = document.getElementById("result");
    try {

        resultElement.textContent = eval(resultElement.textContent);
    } catch (error) {
        resultElement.textContent = "Gabim";
    }
}


function clearCalculation() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = "";
}