import Animal from "./Animal"

class Cavalo extends Animal {
    private competicao:string

    constructor(competicao:string, especie:string, porte:string, domestico: string){
        super(especie, porte,domestico )
        this.competicao = competicao
    }
    imprimirValor() {
        this.imprimirAtributos()
        console.log(`O cavalo é de competição? ${this.competicao}`);
    }
}
export default Cavalo