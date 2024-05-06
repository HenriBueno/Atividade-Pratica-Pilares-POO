import Animal from "./Animal"

class Gato extends Animal {
    private cor:string

    constructor(cor:string, especie:string, porte:string, domestico: string){
        super(especie, porte,domestico )
        this.cor = cor
    }
    imprimirValor() {
        this.imprimirAtributos()
        console.log(`A cor do gato é: ${this.cor}`);
    }
}
export default Gato