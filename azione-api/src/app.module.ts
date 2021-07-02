import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllExceptionFilter } from './core/filters/exception-filter';
import { AuthModule } from './modules/auth/auth.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { DominioModule } from './modules/dominio/dominio.module';
import { PessoasModule } from './modules/pessoas/pessoas.module';
import { ProdutoModule } from './modules/produtos/produto.module';
import { UsuarioModule } from './modules/usuarios/usuarios.module';

@Module({
  imports: [
    PessoasModule,
    ClientesModule,
    ProdutoModule,
    DominioModule,
    UsuarioModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: AllExceptionFilter
  }],
})
export class AppModule {}
