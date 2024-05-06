"use strict";
//Exercício 1 //
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Normal_1 = __importDefault(require("./exercicio1/Normal"));
const Vip_1 = __importDefault(require("./exercicio1/Vip"));
const Camarote_1 = __importDefault(require("./exercicio1/Camarote"));
const meuIngressoNormal = new Normal_1.default(50);
const meuIngressoVip = new Vip_1.default(50, 20);
const meuIngressoCamarote = new Camarote_1.default(50, 40);
meuIngressoVip.imprimeValor();
console.log("----------------------------------");
meuIngressoNormal.imprimeValor();
console.log("----------------------------------");
meuIngressoCamarote.imprimeValor();
//Exercício 2 //
const Imovel_1 = __importDefault(require("./exercicio2/Imovel"));
const Novo_1 = __importDefault(require("./exercicio2/Novo"));
const Velho_1 = __importDefault(require("./exercicio2/Velho"));
const meuImovel = new Imovel_1.default("Rua Cardoso, N:25", 50000);
const imovelNovo = new Novo_1.default(20000, "Rua Barroso, N:500", 50000);
const imovelVelho = new Velho_1.default(10000, "Rua Barroso, N:500", 50000);
meuImovel.imprimirAtributos();
console.log("----------------------------------");
imovelNovo.imprimirValor();
console.log("----------------------------------");
imovelVelho.imprimirValor();
console.log("----------------------------------");
console.log("----------------------------------");
//Exercicio 3 //
const Gato_1 = __importDefault(require("./exercicio3/Gato"));
const Cavalo_1 = __importDefault(require("./exercicio3/Cavalo"));
const Cachorro_1 = __importDefault(require("./exercicio3/Cachorro"));
const novoCachorro = new Cachorro_1.default('Pitbull', 'Cachorro', 'Médio', 'Sim');
const novoCavalo = new Cavalo_1.default('Equite', 'Cavalo', 'Grande', 'Sim');
const novoGato = new Gato_1.default('Frajola', 'Gato', 'Pequeno', 'Sim');
novoCachorro.imprimirValor();
console.log("----------------------------------");
novoCavalo.imprimirValor();
console.log("----------------------------------");
novoGato.imprimirValor();
