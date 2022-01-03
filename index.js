import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

//aqui estou utilizando meu construtor para que ele n altere mais o cpf
const cliente1 = new Cliente('Ricardo', 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);