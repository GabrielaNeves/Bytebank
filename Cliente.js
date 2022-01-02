export class Cliente{
    nome;
    _cpf;

    //metodo get com o construtor para que o cpf n seja mais alterado
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}