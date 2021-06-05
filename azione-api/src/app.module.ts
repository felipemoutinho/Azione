import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllExceptionFilter } from './core/filters/exception-filter';
import { DominioModule } from './modules/dominio/dominio.module';
import { PaisModule } from './modules/dominio/pais/pais.module';
import { PessoaContatoModule } from './modules/pessoas/pessoa-contato/pessoa-contato.module';
import { PessoasEnderecoModule } from './modules/pessoas/pessoa-endereco/pessoas-endereco.module';
import { PessoasModule } from './modules/pessoas/pessoas.module';
import { ProdutoModule } from './modules/produto/produto.module';

@Module({
  imports: [
    PessoasModule,
    ProdutoModule,
    PessoaContatoModule,
    PessoasEnderecoModule,
    DominioModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: AllExceptionFilter
  }],
})
export class AppModule {}
