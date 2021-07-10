import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { DadosPessoaJuridica } from "./dados-pessoa-juridica.entity";
import { DadosPessoaJuridicaService } from "./dados-pessoa-juridica.service";

@Controller('pessoa-juridica')
export class DadosPessoaJuridicaController {

    constructor(private pessoaJuridicaService: DadosPessoaJuridicaService){}
    
    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll():Promise<DadosPessoaJuridica[]>{
        return this.pessoaJuridicaService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':idpessoa')
    async getByIdPessoa(@Param('idpessoa') idpessoa: number): Promise<DadosPessoaJuridica> {
        return this.pessoaJuridicaService.getByIdPessoa(idpessoa);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() dadosPJ: DadosPessoaJuridica):Promise<DadosPessoaJuridica>{
        return this.pessoaJuridicaService.create(dadosPJ);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    async update(@Body() dadosPJ: DadosPessoaJuridica): Promise<[number,DadosPessoaJuridica[]]> {
        return this.pessoaJuridicaService.update(dadosPJ);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':idpessoa')
    async delete(@Param('idpessoa') idpessoa:number){
        return this.pessoaJuridicaService.delete(idpessoa);
    }
}