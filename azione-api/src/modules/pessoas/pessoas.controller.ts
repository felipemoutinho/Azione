import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PessoaModel } from './pessoa.model';
import { PessoaService } from './pessoa.service';

@Controller('pessoas')
export class PessoasController {
    
    constructor(private pessoaService: PessoaService){
        
    }

    @Get()
    RetornaPessoas():PessoaModel[]{
        return this.pessoaService.getAll();
    }

    @Get('ativas')
    RetornaPessoasAtivas(): PessoaModel[]{
        return this.pessoaService.getAllActive();
    }

    @Get(':id')
    getById(@Param('id') id:number):PessoaModel{
        return this.pessoaService.getById(id);
    }

    @Post()
    create(@Body() pessoa:PessoaModel) {
        this.pessoaService.create(pessoa.nome,pessoa.ativa);
    }

    @Patch()
    update(@Body() pessoa:PessoaModel){
        this.pessoaService.update(pessoa);
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        this.pessoaService.delete(id);
    }

}
