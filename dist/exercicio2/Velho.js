"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Imovel_1 = __importDefault(require("./Imovel"));
class Velho extends Imovel_1.default {
    constructor(valorDoDesconto, endereco, preco) {
        super(endereco, preco);
        this.valorDoDesconto = valorDoDesconto;
    }
    imprimirValor() {
        console.log(`O valor do desconto é: ${this.valorDoDesconto}`);
        console.log(`O valor do imovel com desconto é: ${this.preco - this.valorDoDesconto}`);
    }
}
exports.default = Velho;
