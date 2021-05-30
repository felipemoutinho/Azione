import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PessoaContato } from "./pessoa-contato.entity";
import { PessoaContatoService } from "./pessoa-contato.service";

@Controller('pessoa-contato')
export class PessoasContatoController{
    constructor(private pessoaContatoService: PessoaContatoService){

    }

    @Get()
    async getAll(): Promise<PessoaContato[]>{
        return this.pessoaContatoService.getAll();
    }

    @Get('dados-pessoa')
    async getDadosPessoas(): Promise<PessoaContato[]>{
        return this.pessoaContatoService.getInfoPessoasContato();
    }

    @Get(':idpessoa')
    async getDadosContatoByIdpessoa(@Param('idpessoa') idpessoa: number): Promise<PessoaContato[]>{
        return this.pessoaContatoService.getContatoByIdPessoa(idpessoa);
    }

    @Post()
    async createPessoaContato(@Body() dadoscontato: PessoaContato): Promise<PessoaContato>{
        return this.pessoaContatoService.createPessoaContato(dadoscontato);
    }

    @Put()
    async updatePessoaContato(@Body() dadoscontato: PessoaContato): Promise<[number,PessoaContato[]]>{
        return this.pessoaContatoService.updateContatoPessoa(dadoscontato);
    }

    @Delete(':idpessoacontato')
    async deletePessoaContato(@Param('idpessoacontato') idpessoacontato:number){
        this.pessoaContatoService.deleteContatoPessoa(idpessoacontato);
    }
}