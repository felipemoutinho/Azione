import { Controller, Get, Param } from "@nestjs/common";
import { Tributacao } from "./identificador-tributacao.entity";
import { TributacaoService } from "./identificador-tributacao.service";

@Controller('identificador-tributacao')
export class TributacaoController {

    constructor(private tributacaoService: TributacaoService){

    }

    @Get(':codigoTributacao')
    async getTributacaoByCodigo(@Param('codigoTributacao') codigoTributacao: string): Promise<Tributacao>{
        return this.tributacaoService.getTributacaoByCodigo(codigoTributacao);
    }
}