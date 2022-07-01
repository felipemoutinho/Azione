import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UseGuards
} from "@nestjs/common";
import {
    JwtAuthGuard
} from "src/core/guards/jwt-auth.guard";
import {
    DadosPessoaFisicaService
} from "../pessoas/dados-pessoa-fisica/dados-pessoa-fisica.service";
import {
    DadosPessoaJuridicaService
} from "../pessoas/dados-pessoa-juridica/dados-pessoa-juridica.service";
import {
    PessoaContatoService
} from "../pessoas/pessoa-contato/pessoa-contato.service";
import {
    PessoaEnderecoService
} from "../pessoas/pessoa-endereco/pessoa-endereco.service";
import {
    PessoaService
} from "../pessoas/pessoa.service";
import {
    Cliente
} from "./clientes.entity";
import {
    DadosClientePF,
    DadosClientePJ
} from "./clientes.model";
import {
    ClientesService
} from "./clientes.service";

@Controller('clientes')
export class ClientesController {

    constructor(private clientesService: ClientesService,
        private pessoaService: PessoaService,
        private pessoaContatoService: PessoaContatoService,
        private pessoaFisicaService: DadosPessoaFisicaService,
        private pessoaJuridicaService: DadosPessoaJuridicaService,
        private pessoaEnderecoService: PessoaEnderecoService
    ) {

    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise < Cliente[] > {
        return this.clientesService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':idpessoa')
    async getByIdPessoa(@Param('idpessoa') idpessoa: number): Promise < Cliente > {
        return this.clientesService.getByIdPessoa(idpessoa);
    }

    @UseGuards(JwtAuthGuard)
    @Post('cliente-pf')
    async createClientePf(@Body() dadosClientePF: DadosClientePF) {
        try{
            const pessoa = this.pessoaService.create(dadosClientePF.pessoa);
            console.log(dadosClientePF);
            if (pessoa) {
                const idpessoa = (await pessoa).idpessoa;
    
                if (dadosClientePF.pessoa.pessoaContato && dadosClientePF.pessoa.pessoaContato.length > 0) {
    
                    dadosClientePF.pessoa.pessoaContato.map(contato => contato.idpessoa = idpessoa);
    
                    for (let contato of dadosClientePF.pessoa.pessoaContato) {
                        await this.pessoaContatoService.createPessoaContato(contato);
                    }
                }
    
    
                if (dadosClientePF.pessoa.pessoaEndereco && dadosClientePF.pessoa.pessoaEndereco.length > 0) {
                    dadosClientePF.pessoa.pessoaEndereco.map(end => end.idpessoa = idpessoa);
    
                    for (let endereco of dadosClientePF.pessoa.pessoaEndereco) {
                        await this.pessoaEnderecoService.createPessoaEndereco(endereco);
                    }
                }
    
                console.log('PF: ' + dadosClientePF.pessoa.pessoaFisica);
    
                if (dadosClientePF.pessoa.pessoaFisica) {
                    dadosClientePF.pessoa.pessoaFisica.idpessoa = idpessoa;
                    await this.pessoaFisicaService.create(dadosClientePF.pessoa.pessoaFisica);
                }
    
                console.log('Cliente: ' + dadosClientePF.pessoa.cliente);
    
                if (dadosClientePF.pessoa.cliente) {
                    dadosClientePF.pessoa.cliente.idpessoa = idpessoa;
                    return await this.clientesService.create(dadosClientePF.pessoa.cliente);
                }
            }
        }
        catch(err){
            console.log(err);
            throw new Error(err);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('cliente-pj')
    async createClientePj(@Body() dadosClientePJ: DadosClientePJ) {
        try {
            const pessoa = await this.pessoaService.create(dadosClientePJ.pessoa);

            if (pessoa) {
                const idpessoa = pessoa.idpessoa;

                if (dadosClientePJ.contatos && dadosClientePJ.contatos.length > 0) {

                    dadosClientePJ.contatos.map(contato => contato.idpessoa = idpessoa);

                    dadosClientePJ.contatos.forEach(
                        contato => this.pessoaContatoService.createPessoaContato(contato)
                    );
                }

                if (dadosClientePJ.enderecos && dadosClientePJ.enderecos.length > 0) {
                    dadosClientePJ.enderecos.map(end => end.idpessoa = idpessoa);

                    dadosClientePJ.enderecos.forEach(end => this.pessoaEnderecoService.createPessoaEndereco(end));
                }

                if (dadosClientePJ.dadosPessoaJuridica) {
                    dadosClientePJ.dadosPessoaJuridica.idpessoa = idpessoa;
                    this.pessoaJuridicaService.create(dadosClientePJ.dadosPessoaJuridica);
                }

                if (dadosClientePJ.dadosCliente) {
                    dadosClientePJ.dadosCliente.idpessoa = idpessoa;
                    return this.clientesService.create(dadosClientePJ.dadosCliente);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}