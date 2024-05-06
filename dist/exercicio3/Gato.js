"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Gato extends Animal_1.default {
    constructor(cor, especie, porte, domestico) {
        super(especie, porte, domestico);
        this.cor = cor;
    }
    imprimirValor() {
        this.imprimirAtributos();
        console.log(`A cor do gato é: ${this.cor}`);
    }
}
exports.default = Gato;
