import { Inject, Injectable } from "@nestjs/common";
import { DadosPessoaFisica } from "./dados-pessoa-fisica.entity";

@Injectable()
export class DadosPessoaFisicaService {
    constructor(@Inject('DADOS_PESSOA_FISICA_REPOSITORY') private pessoaFisicaRepository: typeof DadosPessoaFisica){

    }

    async getAll(): Promise<DadosPessoaFisica[]>{
        return this.pessoaFisicaRepository.findAll();
    }
}