export class Conta{
  constructor(saldoInicial, cliente, agencia){
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  //instanciando para que o cliente só aceite valores da classe
  set cliente(novoValor){
    if(novoValor instanceof Cliente){
      this._cliente = novoValor;
    };
  };

  //acessor para que eu consiga pegar somente o cliente
  get cliente(){
    return this._cliente;
  }

  get saldo(){
    return this._saldo;
  }

  sacar(valor){
    let taxa = 1
    return this.sacar(valor, taxa);
  }

  _sacar (valor, taxa){
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado){
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0; //se n tiver saldo o suficiente, retorna 0
  }

  depositar(valor){
    if(valor <= 0)
    {
      return;
    } 
    this._saldo += valor;           
  }

  tranferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}