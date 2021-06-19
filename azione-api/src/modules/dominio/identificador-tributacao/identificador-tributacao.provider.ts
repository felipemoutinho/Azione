import { Tributacao } from "./identificador-tributacao.entity";

export const tributacaoProvider = [{
    provide: 'tributacao_repository',
    useValue: Tributacao
}]