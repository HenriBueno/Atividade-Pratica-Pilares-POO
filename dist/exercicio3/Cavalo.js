"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Cavalo extends Animal_1.default {
    constructor(competicao, especie, porte, domestico) {
        super(especie, porte, domestico);
        this.competicao = competicao;
    }
    imprimirValor() {
        this.imprimirAtributos();
        console.log(`O cavalo é de competição? ${this.competicao}`);
    }
}
exports.default = Cavalo;
