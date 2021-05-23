import { Module } from '@nestjs/common';
import { PessoasController } from './pessoas.controller';
import { PessoaService } from './pessoa.service';

@Module({
    controllers: [PessoasController],
    providers: [PessoaService]
})
export class PessoasModule {}
