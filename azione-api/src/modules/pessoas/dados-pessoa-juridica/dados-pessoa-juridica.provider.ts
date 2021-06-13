import { DadosPessoaJuridica } from "./dados-pessoa-juridica.entity";

export const dadosPessoaJuridicaProvider = [
    {
        provide: 'PESSOA_JURIDICA_REPOSITORY',
        useValue: DadosPessoaJuridica
    }
];