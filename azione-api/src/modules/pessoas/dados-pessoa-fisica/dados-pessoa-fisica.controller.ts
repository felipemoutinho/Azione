import { Controller, Get } from "@nestjs/common";
import { DadosPessoaFisica } from "./dados-pessoa-fisica.entity";
import { DadosPessoaFisicaService } from "./dados-pessoa-fisica.service";

@Controller('pessoa-fisica')
export class DadosPessoaFisicaController{

    constructor(private pessoaFisicaService: DadosPessoaFisicaService){

    }
    
    @Get()
    async getAll(): Promise<DadosPessoaFisica[]>{
        return this.pessoaFisicaService.getAll();
    }

}