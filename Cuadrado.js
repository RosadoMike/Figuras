import Figura from './Figura.js';

class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    esValido() {
        return this.lado > 0;
    }

    calcularArea() {
        return Math.pow(this.lado, 2);
    }

    calcularPerimetro() {
        return 4 * this.lado;
    }
}

export default Cuadrado;
