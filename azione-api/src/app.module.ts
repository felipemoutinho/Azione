import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaEntity } from './modules/pessoas/pessoa.entity';
import { PessoasModule } from './modules/pessoas/pessoas.module';
import { ProdutoModule } from './modules/produto/produto.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 49155,
      username: 'docker',
      password: 'Aa123456',
      database: 'postgres',
      autoLoadModels: true,
      synchronize: true
    }),
    PessoasModule,
    ProdutoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
