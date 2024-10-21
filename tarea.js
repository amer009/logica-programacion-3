// Función para calcular el factorial
function calcularFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;   
}

function botonClick() {
    let valorInput = document.getElementById('numero').value;
    let numero = parseInt(valorInput);

    if (isNaN(numero) || numero < 0) {
        document.getElementById('resultado').innerText = "Por favor, ingresa un número válido mayor o igual a 0.";
    } else {
        let resultadoFactorial = calcularFactorial(numero);
        document.getElementById('resultado').innerText = `El factorial de ${numero} es ${resultadoFactorial}.`;
        
    }
}
document.getElementById('enviar').addEventListener('click', botonClick);
