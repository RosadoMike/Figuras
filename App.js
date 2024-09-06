import Rectangulo from './Rectangulo.js';
import Cuadrado from './Cuadrado.js';
import Triangulo from './Triangulo.js';
import Circulo from './Circulo.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        document.getElementById('rectangulo').addEventListener('click', () => this.mostrarFormulario('rectangulo'));
        document.getElementById('cuadrado').addEventListener('click', () => this.mostrarFormulario('cuadrado'));
        document.getElementById('triangulo').addEventListener('click', () => this.mostrarFormulario('triangulo'));
        document.getElementById('circulo').addEventListener('click', () => this.mostrarFormulario('circulo'));
        document.getElementById('closeModal').addEventListener('click', () => {
            document.getElementById('resultModal').classList.add('hidden');
        });

        // Hacemos globales las funciones para que puedan ser usadas en HTML
        window.calcularFigura = this.calcularFigura.bind(this);
        window.regresar = this.regresar.bind(this);
    }

    mostrarFormulario(figura) {
        const formContainer = document.getElementById('formContainer');
        const container = document.querySelector('.container');

        container.classList.add('hidden');
        formContainer.innerHTML = '';

        let formHTML = '';

        switch (figura) {
            case 'rectangulo':
                formHTML = `
                    <h2>Datos del Rectángulo</h2>
                    <label>Ancho: <input type="number" id="ancho"></label><br>
                    <label>Alto: <input type="number" id="alto"></label><br>
                    <button onclick="calcularFigura('rectangulo')">Calcular</button>
                `;
                break;
            case 'cuadrado':
                formHTML = `
                    <h2>Datos del Cuadrado</h2>
                    <label>Lado: <input type="number" id="lado"></label><br>
                    <button onclick="calcularFigura('cuadrado')">Calcular</button>
                `;
                break;
            case 'triangulo':
                formHTML = `
                    <h2>Datos del Triángulo</h2>
                    <label>Lado 1: <input type="number" id="lado1"></label><br>
                    <label>Lado 2: <input type="number" id="lado2"></label><br>
                    <label>Lado 3: <input type="number" id="lado3"></label><br>
                    <button onclick="calcularFigura('triangulo')">Calcular</button>
                `;
                break;
            case 'circulo':
                formHTML = `
                    <h2>Datos del Círculo</h2>
                    <label>Radio: <input type="number" id="radio"></label><br>
                    <button onclick="calcularFigura('circulo')">Calcular</button>
                `;
                break;
        }

        formHTML += `<br><button onclick="regresar()">Regresar</button>`;
        formContainer.innerHTML = formHTML;
        formContainer.classList.remove('hidden');
    }

    calcularFigura(tipo) {
        let figura, resultado = '';
        switch (tipo) {
            case 'rectangulo':
                const ancho = parseFloat(document.getElementById('ancho').value);
                const alto = parseFloat(document.getElementById('alto').value);
                figura = new Rectangulo(ancho, alto);
                if (!figura.esValido()) {
                    this.mostrarError('Rectángulo inválido: el ancho y alto deben ser positivos y diferentes.');
                    return;
                }
                resultado = `Área: ${figura.calcularArea()}, Perímetro: ${figura.calcularPerimetro()}`;
                break;
            case 'cuadrado':
                const lado = parseFloat(document.getElementById('lado').value);
                figura = new Cuadrado(lado);
                if (!figura.esValido()) {
                    this.mostrarError('Cuadrado inválido: el lado debe ser positivo.');
                    return;
                }
                resultado = `Área: ${figura.calcularArea()}, Perímetro: ${figura.calcularPerimetro()}`;
                break;
            case 'triangulo':
                const lado1 = parseFloat(document.getElementById('lado1').value);
                const lado2 = parseFloat(document.getElementById('lado2').value);
                const lado3 = parseFloat(document.getElementById('lado3').value);
                figura = new Triangulo(lado1, lado2, lado3);
                if (!figura.esValido()) {
                    this.mostrarError('Triángulo inválido: los lados deben ser positivos y cumplir la desigualdad triangular.');
                    return;
                }
                resultado = `Área: ${figura.calcularArea()}, Perímetro: ${figura.calcularPerimetro()}, Tipo: ${figura.tipoDeTriangulo()}`;
                break;
            case 'circulo':
                const radio = parseFloat(document.getElementById('radio').value);
                figura = new Circulo(radio);
                if (!figura.esValido()) {
                    this.mostrarError('Círculo inválido: el radio debe ser positivo.');
                    return;
                }
                resultado = `Área: ${figura.calcularArea()}, Perímetro: ${figura.calcularPerimetro()}`;
                break;
        }
        figura.mostrarResultado(resultado);
    }

    mostrarError(mensaje) {
        const resultText = document.getElementById('resultText');
        resultText.innerText = mensaje;
        document.getElementById('resultModal').classList.remove('hidden');
    }

    regresar() {
        const formContainer = document.getElementById('formContainer');
        const container = document.querySelector('.container');
        container.classList.remove('hidden');
        formContainer.innerHTML = '';
        formContainer.classList.add('hidden');
    }
}

// Instanciar la aplicación
const app = new App();
