import { Controller, Get, Param } from "@nestjs/common";
import { Cidade } from "./cidade.entity";
import { CidadeService } from "./cidade.service";

@Controller('cidade')
export class CidadeController{
    constructor(private cidadeService: CidadeService){

    }
    
    @Get(':nomeCidade')
    async getCidadeByName(@Param('nomeCidade') nomeCidade: string): Promise<Cidade>{
        return this.cidadeService.getCidadeByName(nomeCidade);
    }

}