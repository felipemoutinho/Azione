import { DadosPessoaFisica } from "../pessoas/dados-pessoa-fisica/dados-pessoa-fisica.entity";
import { DadosPessoaJuridica } from "../pessoas/dados-pessoa-juridica/dados-pessoa-juridica.entity";
import { PessoaContato } from "../pessoas/pessoa-contato/pessoa-contato.entity";
import { PessoaEndereco } from "../pessoas/pessoa-endereco/pessoa-endereco.entity";
import { Pessoa } from "../pessoas/pessoa.entity";
import { Cliente } from "./clientes.entity";

class DadosCliente{
    pessoa: Pessoa;
    contatos: PessoaContato[];
    enderecos: PessoaEndereco[];
    dadosCliente: Cliente;
}

export class DadosClientePF extends DadosCliente {
    dadosPessoaFisica: DadosPessoaFisica;
}

export class DadosClientePJ extends DadosCliente{
    dadosPessoaJuridica: DadosPessoaJuridica;
}