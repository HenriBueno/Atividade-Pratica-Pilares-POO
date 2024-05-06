import Ingresso from "./Ingresso";

class Vip extends Ingresso {
  private valorAdicional: number;
 

  constructor(valorAdicional: number, valorIngresso: number) {
    super(valorIngresso);
    this.valorAdicional = valorAdicional;
  }

  imprimeValor() {
    console.log(this.valorAdicional + this.valor);
  }
}

export default Vip;
