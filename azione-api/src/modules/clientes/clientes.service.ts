import { Inject, Injectable } from "@nestjs/common";
import { DadosPessoaFisica } from "../pessoas/dados-pessoa-fisica/dados-pessoa-fisica.entity";
import { DadosPessoaJuridica } from "../pessoas/dados-pessoa-juridica/dados-pessoa-juridica.entity";
import { PessoaContato } from "../pessoas/pessoa-contato/pessoa-contato.entity";
import { PessoaEndereco } from "../pessoas/pessoa-endereco/pessoa-endereco.entity";
import { Pessoa } from "../pessoas/pessoa.entity";
import { Cliente } from "./clientes.entity";

@Injectable()
export class ClientesService {
    constructor(@Inject('CLIENTES_REPOSITORY') private clientesRepository: typeof Cliente){

    }

    async getAll():Promise<Cliente[]>{
        return this.clientesRepository.findAll({
            include: [{
                model: Pessoa,
                attributes: ['codigopessoa','nome']
            }]
        });
    }

    async getByIdPessoa(idpessoa: number): Promise<Cliente>{
        return this.clientesRepository.findOne({
            where: {
                idpessoa: idpessoa
            },
            include: [{
                model: Pessoa,
                include: 
                [
                    {
                        model: PessoaContato
                    },
                    {
                        model: PessoaEndereco
                    },
                    {
                        model: DadosPessoaFisica
                    },
                    {
                        model: DadosPessoaJuridica
                    }
                ]
            }]
        });
    }

    async delete(idpessoa: number){
        return this.clientesRepository.destroy({
            where: {
                idpessoa: idpessoa
            }
        });
    }

    async create(cliente: Cliente): Promise<Cliente>{
        return this.clientesRepository.create(cliente);
    }

    async update(cliente: Cliente): Promise<[number,Cliente[]]> {
        return this.clientesRepository.update(
            cliente, {
                where: {
                    idpessoa: cliente.idpessoa
                }
            }
        );
    }
}