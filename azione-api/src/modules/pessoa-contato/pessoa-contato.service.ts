import { Injectable, Inject } from "@nestjs/common";
import { Pessoa } from "../pessoas/pessoa.entity";
import { PessoaContato } from "./pessoa-contato.entity";

@Injectable()
export class PessoaContatoService{
    constructor(@Inject('PESSOA_CONTATO_REPOSITORY') private pessoaContatoRepository: typeof PessoaContato){

    }

    async getAll(): Promise<PessoaContato[]>{
        return this.pessoaContatoRepository.findAll();
    }

    async getInfoPessoasContato(): Promise<PessoaContato[]>{
        return this.pessoaContatoRepository.findAll({
            include: [{
                model: Pessoa
            }]
        });
    }

    async getContatoByIdPessoa(idpessoa:number): Promise<PessoaContato[]>{
        return (await this.pessoaContatoRepository.findAll({
            where: {
                idpessoa: idpessoa
            }
        }));
    }

    async createPessoaContato(dadosContato: PessoaContato): Promise<PessoaContato>{
        return this.pessoaContatoRepository.create(dadosContato);
    }

    async updateContatoPessoa(dadosContato: PessoaContato): Promise<[number,PessoaContato[]]>{
        return this.pessoaContatoRepository.update(dadosContato, {
            where: {
                idpessoacontato: dadosContato.idpessoacontato
            }
        });
    }

    async deleteContatoPessoa(idpessoacontato: number){
        return this.pessoaContatoRepository.destroy({
            where:{
                idpessoacontato: idpessoacontato
            }
        });
    }
}