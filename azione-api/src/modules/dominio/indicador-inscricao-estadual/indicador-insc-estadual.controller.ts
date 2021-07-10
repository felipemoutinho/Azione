import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { IndicadorInscEstadual } from "./indicador-insc-estadual.entity";
import { IndicadorInscEstadualService } from "./indicador-insc-estadual.service";

@Controller('indicador-inscricao-estadual')
export class IndicadorInscEstadualController {
    constructor(private indicadorInscEstadualService: IndicadorInscEstadualService){

    }

    @UseGuards(JwtAuthGuard)
    @Get(':codigoIndicador')
    async getIndicadorByCodigo(@Param('codigoIndicador') codigoIndicador: string): Promise<IndicadorInscEstadual>{
        return this.indicadorInscEstadualService.getIndicadorByCodigo(codigoIndicador);
    }
}