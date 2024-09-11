// Función recursiva para calcular el MCD usando el Algoritmo de Euclides
function calcularMCD(a, b) {
    if (b === 0) {
        return a;
    } else {
        return calcularMCD(b, a % b);
    }
}

// Manejar el evento del formulario
document.getElementById('mcdForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío del formulario
    
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    
    if (numero1 > 0 && numero2 > 0) {
        const resultado = calcularMCD(numero1, numero2);
        document.getElementById('resultado').textContent = `El MCD de ${numero1} y ${numero2} es: ${resultado}`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, introduce números positivos mayores a cero.';
    }
});
