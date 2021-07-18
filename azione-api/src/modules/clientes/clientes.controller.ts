import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { DadosPessoaFisicaService } from "../pessoas/dados-pessoa-fisica/dados-pessoa-fisica.service";
import { DadosPessoaJuridicaService } from "../pessoas/dados-pessoa-juridica/dados-pessoa-juridica.service";
import { PessoaContatoService } from "../pessoas/pessoa-contato/pessoa-contato.service";
import { PessoaEnderecoService } from "../pessoas/pessoa-endereco/pessoa-endereco.service";
import { PessoaService } from "../pessoas/pessoa.service";
import { Cliente } from "./clientes.entity";
import { DadosClientePF, DadosClientePJ } from "./clientes.model";
import { ClientesService } from "./clientes.service";

@Controller('clientes')
export class ClientesController {

    constructor(private clientesService: ClientesService, 
        private pessoaService: PessoaService,
        private pessoaContatoService: PessoaContatoService,
        private pessoaFisicaService: DadosPessoaFisicaService,
        private pessoaJuridicaService: DadosPessoaJuridicaService,
        private pessoaEnderecoService: PessoaEnderecoService
        ){

    }
    
    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<Cliente[]>{
        return this.clientesService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':idpessoa')
    async getByIdPessoa(@Param('idpessoa') idpessoa: number): Promise<Cliente> {
        return this.clientesService.getByIdPessoa(idpessoa);
    }

    @UseGuards(JwtAuthGuard)
    @Post('cliente-pf')
    async createClientePf(@Body() dadosClientePF: DadosClientePF){
        const pessoa  = this.pessoaService.create(dadosClientePF.pessoa);
        
        if(pessoa){
            const idpessoa = (await pessoa).idpessoa;
            
            if(dadosClientePF.contatos && dadosClientePF.contatos.length > 0){
                
                dadosClientePF.contatos.map(contato => contato.idpessoa = idpessoa);
                
                dadosClientePF.contatos.forEach(
                    contato => this.pessoaContatoService.createPessoaContato(contato)
                );
            }

            if(dadosClientePF.enderecos && dadosClientePF.enderecos.length > 0){
                dadosClientePF.enderecos.map(end => end.idpessoa = idpessoa);

                dadosClientePF.enderecos.forEach(end => this.pessoaEnderecoService.createPessoaEndereco(end));
            }

            if(dadosClientePF.dadosPessoaFisica){
                dadosClientePF.dadosPessoaFisica.idpessoa = idpessoa;
                this.pessoaFisicaService.create(dadosClientePF.dadosPessoaFisica);
            }

            if(dadosClientePF.dadosCliente){
                dadosClientePF.dadosCliente.idpessoa = idpessoa;
                return this.clientesService.create(dadosClientePF.dadosCliente);
            }
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('cliente-pj')
    async createClientePj(@Body() dadosClientePJ: DadosClientePJ){
        const pessoa  = this.pessoaService.create(dadosClientePJ.pessoa);
        
        if(pessoa){
            const idpessoa = (await pessoa).idpessoa;
            
            if(dadosClientePJ.contatos && dadosClientePJ.contatos.length > 0){
                
                dadosClientePJ.contatos.map(contato => contato.idpessoa = idpessoa);
                
                dadosClientePJ.contatos.forEach(
                    contato => this.pessoaContatoService.createPessoaContato(contato)
                );
            }

            if(dadosClientePJ.enderecos && dadosClientePJ.enderecos.length > 0){
                dadosClientePJ.enderecos.map(end => end.idpessoa = idpessoa);

                dadosClientePJ.enderecos.forEach(end => this.pessoaEnderecoService.createPessoaEndereco(end));
            }

            if(dadosClientePJ.dadosPessoaJuridica){
                dadosClientePJ.dadosPessoaJuridica.idpessoa = idpessoa;
                this.pessoaJuridicaService.create(dadosClientePJ.dadosPessoaJuridica);
            }

            if(dadosClientePJ.dadosCliente){
                dadosClientePJ.dadosCliente.idpessoa = idpessoa;
                return this.clientesService.create(dadosClientePJ.dadosCliente);
            }
        }
    }
}