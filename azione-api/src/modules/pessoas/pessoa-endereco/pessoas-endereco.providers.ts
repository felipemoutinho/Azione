import { PessoaEndereco } from "./pessoa-endereco.entity";

export const pessoaEnderecoProvider = [{
    provide: 'PESSOA_ENDERECO_REPOSITORY',
    useValue: PessoaEndereco
}]