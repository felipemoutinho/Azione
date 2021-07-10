import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { Cidade } from "./cidade.entity";
import { CidadeService } from "./cidade.service";

@Controller('cidade')
export class CidadeController{
    constructor(private cidadeService: CidadeService){

    }
    
    @UseGuards(JwtAuthGuard)
    @Get(':nomeCidade')
    async getCidadeByName(@Param('nomeCidade') nomeCidade: string): Promise<Cidade>{
        return this.cidadeService.getCidadeByName(nomeCidade);
    }

}