import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Pessoa } from './pessoa.model';
import { PessoaService } from './pessoa.service';

@Controller('pessoas')
export class PessoasController {
    
    constructor(private pessoaService: PessoaService){
        
    }

    @Get()
    RetornaPessoas():Pessoa[]{
        return this.pessoaService.getAll();
    }

    @Get('ativas')
    RetornaPessoasAtivas(): Pessoa[]{
        return this.pessoaService.getAllActive();
    }

    @Get(':id')
    getById(@Param('id') id:number):Pessoa{
        return this.pessoaService.getById(id);
    }

    @Post()
    create(@Body() pessoa:Pessoa) {
        this.pessoaService.create(pessoa.nome,pessoa.ativa);
    }

    @Patch()
    update(@Body() pessoa:Pessoa){
        this.pessoaService.update(pessoa);
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        this.pessoaService.delete(id);
    }

}
