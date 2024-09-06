import Figura from './Figura.js';

class Rectangulo extends Figura {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }

    esValido() {
        return this.ancho > 0 && this.alto > 0 && this.ancho !== this.alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }

    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}

export default Rectangulo;
