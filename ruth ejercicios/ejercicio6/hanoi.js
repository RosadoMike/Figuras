// Función recursiva para resolver las Torres de Hanói
function hanoi(n, origen, destino, auxiliar, movimientos) {
    if (n === 1) {
      movimientos.push(`Mueve el disco 1 de ${origen} a ${destino}`);
      return;
    }
  
    // Mover n-1 discos desde el origen al auxiliar
    hanoi(n - 1, origen, auxiliar, destino, movimientos);
  
    // Mover el disco n desde el origen al destino
    movimientos.push(`Mueve el disco ${n} de ${origen} a ${destino}`);
  
    // Mover los n-1 discos desde el auxiliar al destino
    hanoi(n - 1, auxiliar, destino, origen, movimientos);
  }
  
  // Función que se ejecuta al hacer clic en el botón
  function resolverHanoi() {
    const n = parseInt(document.getElementById("discos").value);
    const movimientos = [];
  
    if (isNaN(n) || n <= 0) {
      alert("Por favor, ingresa un número válido de discos.");
      return;
    }
  
    // Resolver las Torres de Hanói
    hanoi(n, "A", "C", "B", movimientos);
  
    // Mostrar los movimientos en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    movimientos.forEach(movimiento => {
      const li = document.createElement("li");
      li.textContent = movimiento;
      resultado.appendChild(li);
    });
  }
  