import { PessoaContato } from "./pessoa-contato.entity";

export const pessoaContatoProviders = [
    {
        provide: 'PESSOA_CONTATO_REPOSITORY',
        useValue: PessoaContato
    },
];