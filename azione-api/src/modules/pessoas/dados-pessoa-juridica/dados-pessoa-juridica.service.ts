import { Get, Inject, Injectable } from "@nestjs/common";
import { DadosPessoaJuridica } from "./dados-pessoa-juridica.entity";

@Injectable()
export class DadosPessoaJuridicaService {
    constructor(@Inject('PESSOA_JURIDICA_REPOSITORY') private pessoaJuridicaRepository: typeof DadosPessoaJuridica){

    }

    async getAll(): Promise<DadosPessoaJuridica[]> {
        return this.pessoaJuridicaRepository.findAll();
    }

    async getByIdPessoa(idpessoa: number): Promise<DadosPessoaJuridica> {
        return this.pessoaJuridicaRepository.findOne({
            where: {
                idpessoa:idpessoa
            }
        });
    }
}