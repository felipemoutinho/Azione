import { Controller, Get, Param, Post, Body, HttpException, Put, Delete, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { PessoaEndereco } from "./pessoa-endereco.entity";
import { PessoaEnderecoService } from "./pessoa-endereco.service";

@Controller('pessoa-endereco')
export class PessoaEnderecoController {
    constructor(private pessoaEnderecoService: PessoaEnderecoService){

    }

    @UseGuards(JwtAuthGuard)
    @Get(':idpessoa')
    async getPessoaEndereco(@Param('idpessoa') idpessoa:number): Promise<PessoaEndereco>{
        return this.pessoaEnderecoService.getPessoaEndereco(idpessoa);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async createPessoaEndereco(@Body() dadosEndereco: PessoaEndereco): Promise<PessoaEndereco>{
        return this.pessoaEnderecoService.createPessoaEndereco(dadosEndereco);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    async updatePessoaEndereco(@Body() dadosEndereco: PessoaEndereco): Promise<[number,PessoaEndereco[]]>{
        return this.pessoaEnderecoService.updatePessoaEndereco(dadosEndereco);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':idpessoaendereco')
    async deletePessoaEndereco(@Param('idpessoaendereco') idpessoaendereco: number){
        return this.pessoaEnderecoService.deletePessoaEndereco(idpessoaendereco);
    }
}