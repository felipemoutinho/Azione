import { Cidade } from "./cidade.entity";

export const cidadeProvider = [{
    provide: 'CIDADE_REPOSITORY',
    useValue: Cidade
}];