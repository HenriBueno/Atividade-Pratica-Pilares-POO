"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Cachorro extends Animal_1.default {
    constructor(raca, especie, porte, domestico) {
        super(especie, porte, domestico);
        this.raca = raca;
    }
    imprimirValor() {
        this.imprimirAtributos();
        console.log(`A raça do cachorro é: ${this.raca}`);
    }
}
exports.default = Cachorro;
