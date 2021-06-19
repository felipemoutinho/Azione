import { Inject, Injectable } from "@nestjs/common";
import { IndicadorInscEstadual } from "./indicador-insc-estadual.entity";

@Injectable()
export class IndicadorInscEstadualService {
    constructor(@Inject('indicador_insc_estadual_repository') private indicadorInscEstadualRepository: typeof IndicadorInscEstadual){

    }

    async getIndicadorByCodigo(codigoIndicador: string): Promise<IndicadorInscEstadual> {
        return this.indicadorInscEstadualRepository.findOne({
            where: {
                codigoIndicador: codigoIndicador
            }
        });
    }
}