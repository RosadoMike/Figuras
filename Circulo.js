import Figura from './Figura.js';

class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    esValido() {
        return this.radio > 0;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}

export default Circulo;
