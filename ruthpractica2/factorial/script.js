// Función recursiva para calcular el factorial
function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}

// Manejar el evento del formulario
document.getElementById('factorialForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío del formulario
    
    const numero = parseInt(document.getElementById('numero').value);
    
    if (numero >= 0) {
        const resultado = calcularFactorial(numero);
        document.getElementById('resultado').textContent = `El factorial de ${numero} es: ${resultado}`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, ingresa un número mayor o igual a cero.';
    }
});
