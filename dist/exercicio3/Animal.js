"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(especie, porte, domestico) {
        this.especie = especie;
        this.porte = porte;
        this.domestico = domestico;
    }
    imprimirAtributos() {
        console.log(`Espécie do animal: ${this.especie}`);
        console.log(`Porte do animal: ${this.porte}`);
        console.log(`O animel é doméstico ? ${this.domestico}`);
    }
}
exports.default = Animal;
