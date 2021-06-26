import { Module } from '@nestjs/common';
import { PessoasController } from './pessoas.controller';
import { PessoaService } from './pessoa.service';
import { pessoaProviders } from './pessoas.providers';
import { DataBaseModule } from '../../core/database/database.module';
import { DadosPessoaFisicaModule } from './dados-pessoa-fisica/dados-pessoa-fisica.module';
import { PessoaContatoModule } from './pessoa-contato/pessoa-contato.module';
import { PessoasEnderecoModule } from './pessoa-endereco/pessoas-endereco.module';
import { DadosPessoaJuridicaModule } from './dados-pessoa-juridica/dados-pessoa-juridica.module';
@Module({
    controllers: [PessoasController],
    providers: [PessoaService,...pessoaProviders],
    imports: [DataBaseModule,PessoaContatoModule,PessoasEnderecoModule,DadosPessoaFisicaModule,DadosPessoaJuridicaModule],
    exports: [PessoaService,PessoaContatoModule,PessoasEnderecoModule,DadosPessoaFisicaModule,DadosPessoaJuridicaModule]
})
export class PessoasModule {
    
}
