import { Module } from '@nestjs/common';
import { PessoasController } from './pessoas.controller';
import { PessoaService } from './pessoa.service';
import { pessoaProviders } from './pessoas.providers';
import { DataBaseModule } from '../../core/database/database.module';

@Module({
    controllers: [PessoasController],
    providers: [PessoaService,...pessoaProviders],
    imports: [DataBaseModule]
})
export class PessoasModule {}
