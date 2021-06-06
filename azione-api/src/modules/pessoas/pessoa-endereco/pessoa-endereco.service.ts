import { HttpException, Inject, Injectable } from "@nestjs/common";
import { Cidade } from "src/modules/dominio/cidade/cidade.entity";
import { Estado } from "src/modules/dominio/estado/estado.entity";
import { Pais } from "src/modules/dominio/pais/pais.entity";
import { Pessoa } from "../pessoa.entity";
import { PessoaEndereco } from "./pessoa-endereco.entity";

@Injectable()
export class PessoaEnderecoService{
    constructor(@Inject('PESSOA_ENDERECO_REPOSITORY') private pessoaEnderecoRepository: typeof PessoaEndereco){

    }

    async getPessoaEndereco(idpessoa: number): Promise<PessoaEndereco>{
        return this.pessoaEnderecoRepository.findOne({
            where: {
                idpessoa: idpessoa
            },
            attributes: ['idpessoaendereco','idpessoa', 'logradouro', 'bairro', 'numero','cep','complemento','indprincipal'],
            include: [{
                model: Cidade,
                attributes: ['idcidade','nome']
                },
                {
                    model: Estado,
                    attributes: ['idestado','nome','uf']
                },
                {
                    model: Pais,
                    attributes: ['idpais','nomepais']
                }
            ]
        });
    }

    async createPessoaEndereco(dadosEndereco: PessoaEndereco): Promise<PessoaEndereco> {
        return this.pessoaEnderecoRepository.create(dadosEndereco);
    }

    async updatePessoaEndereco(dadosEndereco: PessoaEndereco): Promise<[number,PessoaEndereco[]]>{
        return this.pessoaEnderecoRepository.update(dadosEndereco, {
            where: {
                idpessoaendereco: dadosEndereco.idpessoaendereco
            }
        });
    }

    async deletePessoaEndereco(idPessoaEndereco: number) {
        return this.pessoaEnderecoRepository.destroy({
            where: {
                idpessoaendereco: idPessoaEndereco
            }
        });
    }
}