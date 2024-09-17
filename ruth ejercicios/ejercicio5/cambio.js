// Denominaciones de monedas en centavos
const denominaciones = [
    { nombre: "100 pesos", valor: 10000 },  
    { nombre: "50 pesos", valor: 5000 },
    { nombre: "20 pesos", valor: 2000 },
    { nombre: "10 pesos", valor: 1000 },
    { nombre: "5 pesos", valor: 500 },
    { nombre: "1 peso", valor: 100 },
    { nombre: "50 centavos", valor: 50 },
    { nombre: "20 centavos", valor: 20 },
    { nombre: "10 centavos", valor: 10 },
    { nombre: "5 centavos", valor: 5 },
    { nombre: "1 centavo", valor: 1 }
  ];
  
  // Función para calcular el cambio
  function calcularCambio() {
    const pago = parseFloat(document.getElementById("pago").value) * 100; // Convertir a centavos
    const costo = parseFloat(document.getElementById("costo").value) * 100; // Convertir a centavos

    if (pago < 0 || costo < 0) {
        alert("El pago y el costo no pueden ser negativos.");
        return;
      }

    if (pago < costo) {
        alert("El pago no puede ser menor que el costo.");
        return;
    }


    const cambio = pago-costo;
    const resultado = obtenerCambio(cambio);
    mostrarResultado(resultado, cambio);
  }
  
  // Función recursiva para obtener el cambio
  function obtenerCambio(cambio, indice = 0, resultado = []) {
    if (indice >= denominaciones.length || cambio === 0) {
      return resultado;
    }
  
    const moneda = denominaciones[indice];
    const cantidadMonedas = Math.floor(cambio / moneda.valor);
  
    if (cantidadMonedas > 0) {
      resultado.push(`${cantidadMonedas} monedas de ${moneda.nombre}`);
    }
  
    // Llamada recursiva con la cantidad restante de cambio
    return obtenerCambio(cambio - cantidadMonedas * moneda.valor, indice + 1, resultado);
  }
  
  // Mostrar el resultado en la página
  function mostrarResultado(resultado, cambioTotal) {
    const listaResultado = document.getElementById("resultado");
    const cambioEnPesos = cambioTotal / 100; 
    listaResultado.innerHTML = ""; 
  
    resultado.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      listaResultado.appendChild(li);
    });
  
    // Mostrar el monto total del cambio
    const cambioTexto = document.createElement("p");
    cambioTexto.textContent = `El cambio es de: ${cambioEnPesos.toFixed(2)} pesos`;
    listaResultado.appendChild(cambioTexto);
  }
  