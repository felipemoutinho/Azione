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
}