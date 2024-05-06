import Animal from "./Animal"

class Cachorro extends Animal {
    private raca:string

    constructor(raca:string, especie:string, porte:string, domestico: string){
        super(especie, porte,domestico )
        this.raca = raca
    }
    imprimirValor() {
        this.imprimirAtributos()
        console.log(`A raça do cachorro é: ${this.raca}`);
    }
}
export default Cachorro