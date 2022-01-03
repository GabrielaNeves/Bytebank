import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

//aqui estou utilizando meu construtor para que ele n altere mais o cpf
const cliente1 = new Cliente('Ricardo', 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);