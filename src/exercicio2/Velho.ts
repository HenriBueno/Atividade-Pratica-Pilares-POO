import Imovel from './Imovel'

class Velho extends Imovel{
    private valorDoDesconto:number

    constructor(valorDoDesconto:number, endereco:string, preco:number){
        super(endereco,preco)
        this.valorDoDesconto = valorDoDesconto
    }
    imprimirValor(){
        
        console.log(`O valor do desconto é: ${this.valorDoDesconto}`);
        console.log(`O valor do imovel com desconto é: ${this.preco - this.valorDoDesconto}`);
        
    }
}
export default Velho