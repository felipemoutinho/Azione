import { Controller, Get } from "@nestjs/common";
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
}