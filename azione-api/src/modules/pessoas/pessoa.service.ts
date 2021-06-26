import { Injectable, Inject } from '@nestjs/common';
import { Pessoa } from './pessoa.entity';

@Injectable()
export class PessoaService {
    
    constructor(@Inject('PESSOA_REPOSITORY') private pessoaRepository: typeof Pessoa){

    }
    
    async getAll(): Promise<Pessoa[]>{
        return this.pessoaRepository.findAll();
    }

    async getById(id: number): Promise<Pessoa>{
        return this.pessoaRepository.findByPk(id);
    }

    async getAllActive(): Promise<Pessoa[]>{
        return this.pessoaRepository.findAll({
            where:{
                ativa: true
            }
        });
    }

    async create(pessoa: Pessoa):Promise<Pessoa>{
        return this.pessoaRepository.create(pessoa);
    }

    async update(pessoa:Pessoa){
        this.pessoaRepository.update(pessoa, {
            where: {
                idpessoa: pessoa.idpessoa
            }
        });
    }

    async delete(id:number){
        this.pessoaRepository.destroy({
            where:{
                idpessoa: id
            }
        });
    }
}
