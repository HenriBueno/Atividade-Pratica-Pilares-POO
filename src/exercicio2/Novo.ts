import Imovel from './Imovel'

class Novo extends Imovel {

    private valorAdicional:number

    constructor(valorAdicional:number, endereco:string, preco:number){
        super(endereco,preco)
        this.valorAdicional= valorAdicional
    }
    imprimirValor(){
        
        console.log(`O valor adicional é: ${this.valorAdicional}`);
        console.log(`A soma do imovel com o valor adicional é: ${this.valorAdicional + this.preco}`);
        
        
    }
}
export default Novo