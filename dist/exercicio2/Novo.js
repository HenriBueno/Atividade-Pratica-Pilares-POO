"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Imovel_1 = __importDefault(require("./Imovel"));
class Novo extends Imovel_1.default {
    constructor(valorAdicional, endereco, preco) {
        super(endereco, preco);
        this.valorAdicional = valorAdicional;
    }
    imprimirValor() {
        console.log(`O valor adicional é: ${this.valorAdicional}`);
        console.log(`A soma do imovel com o valor adicional é: ${this.valorAdicional + this.preco}`);
    }
}
exports.default = Novo;
