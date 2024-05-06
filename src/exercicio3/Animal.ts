abstract class Animal{
    protected especie:string
    protected porte:string
    protected domestico: string

    constructor (especie:string, porte:string, domestico: string){
        this.especie = especie
        this.porte = porte
        this.domestico = domestico
    }
    imprimirAtributos(){
        console.log(`Espécie do animal: ${this.especie}`);
        console.log(`Porte do animal: ${this.porte}`);
        console.log(`O animal é doméstico ? ${this.domestico}`);

        
        
    }

}
export default Animal