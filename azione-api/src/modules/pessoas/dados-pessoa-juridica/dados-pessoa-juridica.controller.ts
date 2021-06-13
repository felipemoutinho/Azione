import { Controller, Get } from "@nestjs/common";
import { DadosPessoaJuridica } from "./dados-pessoa-juridica.entity";
import { DadosPessoaJuridicaService } from "./dados-pessoa-juridica.service";

@Controller('pessoa-juridica')
export class DadosPessoaJuridicaController {

    constructor(private pessoaJuridicaService: DadosPessoaJuridicaService){}
    
    @Get()
    async getAll():Promise<DadosPessoaJuridica[]>{
        return this.pessoaJuridicaService.getAll();
    }

}