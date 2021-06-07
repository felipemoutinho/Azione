import { DadosPessoaFisica } from "./dados-pessoa-fisica.entity";

export const dadosPessoaFisicaProvider = [{
    provide: 'DADOS_PESSOA_FISICA_REPOSITORY',
    useValue: DadosPessoaFisica
}]