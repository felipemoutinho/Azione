import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {Pessoa} from './pessoa.entity';
import { PessoaService } from './pessoa.service';

@Controller('pessoas')
export class PessoasController {
    
    constructor(private pessoaService: PessoaService){
    }

    @Get()
    async RetornaPessoas():Promise<Pessoa[]>{
        return this.pessoaService.getAll();
    }

    @Get('ativas')
    async RetornaPessoasAtivas(): Promise<Pessoa[]>{
        return this.pessoaService.getAllActive();
    }

    @Get(':id')
    async getById(@Param('id') id:number):Promise<Pessoa>{
        return this.pessoaService.getById(id);
    }

    @Post()
    async create(@Body() pessoa:Pessoa) {
        this.pessoaService.create(pessoa);
    }

    @Patch()
    async update(@Body() pessoa:Pessoa){
        this.pessoaService.update(pessoa);
    }

    @Delete(':id')
    async delete(@Param('id') id:number){
        this.pessoaService.delete(id);
    }

}
