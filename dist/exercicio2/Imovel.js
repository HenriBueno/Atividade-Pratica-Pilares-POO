"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Imovel {
    constructor(endereco, preco) {
        this.endereco = endereco;
        this.preco = preco;
    }
    imprimirAtributos() {
        console.log(`O endereco é: ${this.endereco}`);
        console.log(`O preço é: ${this.preco}`);
    }
}
exports.default = Imovel;
