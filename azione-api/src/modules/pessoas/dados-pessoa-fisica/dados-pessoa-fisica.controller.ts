import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { DadosPessoaFisica } from "./dados-pessoa-fisica.entity";
import { DadosPessoaFisicaService } from "./dados-pessoa-fisica.service";

@Controller('pessoa-fisica')
export class DadosPessoaFisicaController{

    constructor(private pessoaFisicaService: DadosPessoaFisicaService){

    }
    
    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<DadosPessoaFisica[]>{
        const pessoasFisicas = this.pessoaFisicaService.getAll();

        if((await pessoasFisicas).length <= 0){
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Nenhuma pessoa física foi encontrada'
            })
        }
        return pessoasFisicas;
    }

    @UseGuards(JwtAuthGuard)
    @Get(':idpessoa')
    async getByIdPessoa(@Param('idpessoa') idpessoa:number):Promise<DadosPessoaFisica>{
        const dadosPF = this.pessoaFisicaService.getByIdpessoa(idpessoa);

        if(dadosPF){
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Pessoa fisíca não encontrada'
            })
        }
        return dadosPF;
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() dadosPessoaFisica: DadosPessoaFisica): Promise<DadosPessoaFisica> {
        return this.pessoaFisicaService.create(dadosPessoaFisica);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    async update(@Body() dadosPF: DadosPessoaFisica): Promise<[number,DadosPessoaFisica[]]>{
        return this.pessoaFisicaService.update(dadosPF);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':iddadospessoafisica')
    async delete(@Param('iddadospessoafisica') iddadospessoafisica: number){
        return this.pessoaFisicaService.delete(iddadospessoafisica);
    }

}