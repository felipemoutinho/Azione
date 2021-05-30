import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaContatoModule } from './modules/pessoas/pessoa-contato/pessoa-contato.module';
import { PessoasEnderecoModule } from './modules/pessoas/pessoa-endereco/pessoas-endereco.module';
import { PessoasModule } from './modules/pessoas/pessoas.module';
import { ProdutoModule } from './modules/produto/produto.module';

@Module({
  imports: [
    PessoasModule,
    ProdutoModule,
    PessoaContatoModule,
    PessoasEnderecoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
