import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import {Pessoa} from './pessoa.entity';
import { PessoaService } from './pessoa.service';

@Controller('pessoas')
export class PessoasController {
    
    constructor(private pessoaService: PessoaService){
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async RetornaPessoas():Promise<Pessoa[]>{
        return this.pessoaService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('ativas')
    async RetornaPessoasAtivas(): Promise<Pessoa[]>{
        return this.pessoaService.getAllActive();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id:number):Promise<Pessoa>{
        return this.pessoaService.getById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() pessoa:Pessoa) {
        this.pessoaService.create(pessoa);
    }

    @UseGuards(JwtAuthGuard)
    @Patch()
    async update(@Body() pessoa:Pessoa){
        this.pessoaService.update(pessoa);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id:number){
        this.pessoaService.delete(id);
    }

}
