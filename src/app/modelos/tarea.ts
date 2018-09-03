export class Tarea{
    mensaje: string;
    completa: boolean;

    constructor(pMensaje) {
        this.mensaje = pMensaje;
        this.completa = false;
    }

    marcarCompleta() {
        this.completa = !this.completa;
    }
}