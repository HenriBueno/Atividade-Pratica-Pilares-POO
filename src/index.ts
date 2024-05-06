//Exercício 1 //

import Normal from "./exercicio1/Normal";
import Vip from "./exercicio1/Vip";
import Camarote from "./exercicio1/Camarote";

const meuIngressoNormal = new Normal(50);
const meuIngressoVip = new Vip(50, 20);
const meuIngressoCamarote = new Camarote(50, 40);

meuIngressoVip.imprimeValor();
console.log("----------------------------------");
meuIngressoNormal.imprimeValor();
console.log("----------------------------------");
meuIngressoCamarote.imprimeValor();

//Exercício 2 //

import Imovel from "./exercicio2/Imovel";
import Novo from "./exercicio2/Novo";
import Velho from "./exercicio2/Velho";

const meuImovel = new Imovel("Rua Cardoso, N:25", 50000);
const imovelNovo = new Novo(20000, "Rua Barroso, N:500", 50000);
const imovelVelho = new Velho(10000, "Rua Barroso, N:500", 50000);

meuImovel.imprimirAtributos();
console.log("----------------------------------");
imovelNovo.imprimirValor();
console.log("----------------------------------");
imovelVelho.imprimirValor();
console.log("----------------------------------");
console.log("----------------------------------");

//Exercicio 3 //

import Gato from "./exercicio3/Gato";
import Cavalo from "./exercicio3/Cavalo";
import Cachorro from "./exercicio3/Cachorro";

const novoCachorro = new Cachorro ('Pitbull','Cachorro','Médio', 'Sim')
const novoCavalo= new Cavalo ('Equite','Cavalo','Grande', 'Sim')
const novoGato = new Gato ('Frajola','Gato','Pequeno', 'Sim')

novoCachorro.imprimirValor();
console.log("----------------------------------");
novoCavalo.imprimirValor();
console.log("----------------------------------");
novoGato.imprimirValor();