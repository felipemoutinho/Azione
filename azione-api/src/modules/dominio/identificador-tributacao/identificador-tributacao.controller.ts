import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { Tributacao } from "./identificador-tributacao.entity";
import { TributacaoService } from "./identificador-tributacao.service";

@Controller('identificador-tributacao')
export class TributacaoController {

    constructor(private tributacaoService: TributacaoService){

    }

    @UseGuards(JwtAuthGuard)
    @Get(':codigoTributacao')
    async getTributacaoByCodigo(@Param('codigoTributacao') codigoTributacao: string): Promise<Tributacao>{
        return this.tributacaoService.getTributacaoByCodigo(codigoTributacao);
    }
}