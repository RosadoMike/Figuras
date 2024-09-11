// Función recursiva para calcular el número de Fibonacci en la posición n
function calcularFibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
    }
}

// Función para generar la secuencia completa de Fibonacci
function generarSecuenciaFibonacci(num) {
    let secuencia = [];
    for (let i = 0; i < num; i++) {
        secuencia.push(calcularFibonacci(i));
    }
    return secuencia;
}
 
// Manejar el evento del formulario
document.getElementById('fibonacciForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío del formulario
    
    const numero = parseInt(document.getElementById('numero').value);
    
    if (numero >= 1) {
        const secuencia = generarSecuenciaFibonacci(numero);
        document.getElementById('resultado').textContent = `Secuencia de Fibonacci para ${numero} términos: ${secuencia.join(', ')}`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, ingresa un número mayor o igual a 1.';
    }
});
