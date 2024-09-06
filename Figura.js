class Figura {
    constructor() {
        if (new.target === Figura) {
            throw new Error("No se puede instanciar una clase abstracta.");
        }
    }

    esValido() {}
    calcularArea() {}
    calcularPerimetro() {}

    mostrarResultado(resultado) {
        const resultText = document.getElementById('resultText');
        resultText.innerText = resultado;
        document.getElementById('resultModal').classList.remove('hidden');
    }
}

export default Figura;
