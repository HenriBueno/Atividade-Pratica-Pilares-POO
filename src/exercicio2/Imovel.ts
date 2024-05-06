 class Imovel {
  protected endereco: string;
  protected preco: number;

  constructor(endereco: string, preco: number) {
    this.endereco = endereco;
    this.preco = preco;
  }

  imprimirAtributos(){
    console.log(`O endereco é: ${this.endereco}`);
    console.log(`O preço é: ${this.preco}`);
    
  }
}

export default Imovel;
