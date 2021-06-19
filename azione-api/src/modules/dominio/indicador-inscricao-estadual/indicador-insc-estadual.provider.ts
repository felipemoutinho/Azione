import { IndicadorInscEstadual } from "./indicador-insc-estadual.entity";

export const indicadorInscEstadualProvider = [{
    provide: 'indicador_insc_estadual_repository',
    useValue: IndicadorInscEstadual
}]