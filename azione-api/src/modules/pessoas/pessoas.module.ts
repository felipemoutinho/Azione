import { Module } from '@nestjs/common';
import { PessoasController } from './pessoas.controller';
import { PessoaService } from './pessoa.service';
import { PessoaEntity } from './pessoa.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    controllers: [PessoasController],
    providers: [PessoaService],
    imports: [SequelizeModule.forFeature([PessoaEntity])]
})
export class PessoasModule {}
