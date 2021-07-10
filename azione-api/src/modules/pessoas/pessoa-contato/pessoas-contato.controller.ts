import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { PessoaContato } from "./pessoa-contato.entity";
import { PessoaContatoService } from "./pessoa-contato.service";

@Controller('pessoa-contato')
export class PessoasContatoController{
    constructor(private pessoaContatoService: PessoaContatoService){

    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<PessoaContato[]>{
        return this.pessoaContatoService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('dados-pessoa')
    async getDadosPessoas(): Promise<PessoaContato[]>{
        return this.pessoaContatoService.getInfoPessoasContato();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':idpessoa')
    async getDadosContatoByIdpessoa(@Param('idpessoa') idpessoa: number): Promise<PessoaContato[]>{
        return this.pessoaContatoService.getContatoByIdPessoa(idpessoa);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async createPessoaContato(@Body() dadoscontato: PessoaContato): Promise<PessoaContato>{
        return this.pessoaContatoService.createPessoaContato(dadoscontato);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    async updatePessoaContato(@Body() dadoscontato: PessoaContato): Promise<[number,PessoaContato[]]>{
        return this.pessoaContatoService.updateContatoPessoa(dadoscontato);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':idpessoacontato')
    async deletePessoaContato(@Param('idpessoacontato') idpessoacontato:number){
        this.pessoaContatoService.deleteContatoPessoa(idpessoacontato);
    }
}