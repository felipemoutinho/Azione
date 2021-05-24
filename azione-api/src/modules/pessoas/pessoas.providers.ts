import { Pessoa } from "./pessoa.entity";

export const pessoaProviders = [
    {
        provide: 'PESSOA_REPOSITORY',
        useValue: Pessoa
    },
];