import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;

    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

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

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
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
