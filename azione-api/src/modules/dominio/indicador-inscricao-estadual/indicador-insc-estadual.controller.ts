import { Controller, Get, Param } from "@nestjs/common";
import { IndicadorInscEstadual } from "./indicador-insc-estadual.entity";
import { IndicadorInscEstadualService } from "./indicador-insc-estadual.service";

@Controller('indicador-inscricao-estadual')
export class IndicadorInscEstadualController {
    constructor(private indicadorInscEstadualService: IndicadorInscEstadualService){

    }

    @Get(':codigoIndicador')
    async getIndicadorByCodigo(@Param('codigoIndicador') codigoIndicador: string): Promise<IndicadorInscEstadual>{
        return this.indicadorInscEstadualService.getIndicadorByCodigo(codigoIndicador);
    }
}