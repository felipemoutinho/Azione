import { Injectable } from '@nestjs/common';
import { noExtendLeft } from 'sequelize/types/lib/operators';
import { Pessoa } from './pessoa.model';


@Injectable()
export class PessoaService {
    Pessoas: Pessoa[] = [
        {idpessoa: 1,nome: "Pessoa 1", ativa: true},
        {idpessoa: 2,nome: "Pessoa 2", ativa: true},
        {idpessoa: 3,nome: "Pessoa 3", ativa: true},
        {idpessoa: 4,nome: "Pessoa 4", ativa: false}
    ];

    getAll(): Pessoa[]{
        return this.Pessoas;
    }

    getById(id: number): Pessoa{
        return this.Pessoas.find((p) => p.idpessoa == id);
    }

    getAllActive(): Pessoa[]{
        return this.Pessoas.filter(p => p.ativa === true);
    }

    create(nome: string, ativa: boolean){
        let lastIdpessoa = 0;
        let qtdPessoas = this.Pessoas.length;

        if(qtdPessoas > 0)
            lastIdpessoa = this.Pessoas[qtdPessoas - 1].idpessoa;

        let proximoIdpessoa = lastIdpessoa + 1;

        this.Pessoas.push({
            idpessoa: proximoIdpessoa,
            nome: nome,
            ativa: ativa
        });
    }

    update(pessoa:Pessoa){
        let varPessoa = this.getById(pessoa.idpessoa);

        if(varPessoa){
            varPessoa.nome = pessoa.nome;
            varPessoa.ativa = pessoa.ativa;
        }
    }

    delete(id:number){
        let index = this.Pessoas.findIndex(p => p.idpessoa == id);

        if(index > -1)
            this.Pessoas.splice(index,1);
    }
}
