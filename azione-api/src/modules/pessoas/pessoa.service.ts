import { Injectable } from '@nestjs/common';
import { Pessoa } from './pessoa.model';
import { PessoaEntity } from './pessoa.entity';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class PessoaService {
    
    constructor(@InjectModel(PessoaEntity) private pessoaModel: typeof PessoaEntity){

    }
    
    async getAll(): Promise<Pessoa[]>{
        return this.pessoaModel.findAll();
    }

    async getById(id: number): Promise<Pessoa>{
        return this.pessoaModel.findByPk(id);
    }

    async getAllActive(): Promise<Pessoa[]>{
        return this.pessoaModel.findAll({
            where:{
                ativa: true
            }
        });
    }

    async create(pessoa: Pessoa){
        this.pessoaModel.create(pessoa);
    }

    async update(pessoa:Pessoa){
        this.pessoaModel.update(pessoa, {
            where: {
                idpessoa: pessoa.idpessoa
            }
        });
    }

    async delete(id:number){
        this.pessoaModel.destroy({
            where:{
                idpessoa: id
            }
        });
    }
}
