import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DadosPessoaJuridica } from "./dados-pessoa-juridica.entity";
import { DadosPessoaJuridicaService } from "./dados-pessoa-juridica.service";

@Controller('pessoa-juridica')
export class DadosPessoaJuridicaController {

    constructor(private pessoaJuridicaService: DadosPessoaJuridicaService){}
    
    @Get()
    async getAll():Promise<DadosPessoaJuridica[]>{
        return this.pessoaJuridicaService.getAll();
    }

    @Get(':idpessoa')
    async getByIdPessoa(@Param('idpessoa') idpessoa: number): Promise<DadosPessoaJuridica> {
        return this.pessoaJuridicaService.getByIdPessoa(idpessoa);
    }

    @Post()
    async create(@Body() dadosPJ: DadosPessoaJuridica):Promise<DadosPessoaJuridica>{
        return this.pessoaJuridicaService.create(dadosPJ);
    }

    @Put()
    async update(@Body() dadosPJ: DadosPessoaJuridica): Promise<[number,DadosPessoaJuridica[]]> {
        return this.pessoaJuridicaService.update(dadosPJ);
    }

    @Delete(':idpessoa')
    async delete(@Param('idpessoa') idpessoa:number){
        return this.pessoaJuridicaService.delete(idpessoa);
    }
}