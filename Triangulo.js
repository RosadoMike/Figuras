import Figura from './Figura.js';

class Triangulo extends Figura {
    constructor(lado1, lado2, lado3) {
        super();
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    esValido() {
        return this.lado1 > 0 && this.lado2 > 0 && this.lado3 > 0 &&
               this.lado1 + this.lado2 > this.lado3 &&
               this.lado1 + this.lado3 > this.lado2 &&
               this.lado2 + this.lado3 > this.lado1;
    }

    calcularArea() {
        const s = (this.lado1 + this.lado2 + this.lado3) / 2;
        return Math.sqrt(s * (s - this.lado1) * (s - this.lado2) * (s - this.lado3));
    }

    calcularPerimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }

    tipoDeTriangulo() {
        if (this.lado1 === this.lado2 && this.lado2 === this.lado3) return 'Equilátero';
        if (this.lado1 === this.lado2 || this.lado2 === this.lado3 || this.lado1 === this.lado3) return 'Isósceles';
        return 'Escaleno';
    }
}

export default Triangulo;
