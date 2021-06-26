import { Module } from '@nestjs/common';
import { DataBaseModule } from '../../../core/database/database.module';
import { PessoaContatoService } from './pessoa-contato.service';
import { PessoasContatoController } from './pessoas-contato.controller';
import { pessoaContatoProviders } from './pessoas-contato.providers';

@Module({
    controllers: [PessoasContatoController],
    providers: [PessoaContatoService,...pessoaContatoProviders],
    imports: [DataBaseModule]
})
export class PessoaContatoModule{}