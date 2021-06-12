import { Inject, Injectable } from "@nestjs/common";
import { DadosPessoa } from "../pessoa.model";
import { DadosPessoaFisica } from "./dados-pessoa-fisica.entity";

@Injectable()
export class DadosPessoaFisicaService {
    constructor(@Inject('DADOS_PESSOA_FISICA_REPOSITORY') private pessoaFisicaRepository: typeof DadosPessoaFisica){

    }

    async getAll(): Promise<DadosPessoaFisica[]>{
        return this.pessoaFisicaRepository.findAll();
    }

    async getByIdpessoa(idpessoa:number): Promise<DadosPessoaFisica>{
        const dadosPF = this.pessoaFisicaRepository.findOne({
            where: {
                idpessoa: idpessoa
            }
        });

        return dadosPF;
    }

    async update(dadosPF: DadosPessoaFisica): Promise<[number,DadosPessoaFisica[]]>{
        return this.pessoaFisicaRepository.update(dadosPF, {
            where: {
                idpessoa: dadosPF.idpessoa
            }
        });
    }

    async create(dadosPessoaFisica: DadosPessoaFisica): Promise<DadosPessoaFisica> {
        return this.pessoaFisicaRepository.create(dadosPessoaFisica);
    }

    async delete(iddadospessoafisica: number){
        return this.pessoaFisicaRepository.destroy({
            where: {
                iddadospessoafisica: iddadospessoafisica
            }
        });
    }
}