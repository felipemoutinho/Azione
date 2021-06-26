import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/core/database/database.module";
import { DadosPessoaJuridicaController } from "./dados-pessoa-juridica.controller";
import { dadosPessoaJuridicaProvider } from "./dados-pessoa-juridica.provider";
import { DadosPessoaJuridicaService } from "./dados-pessoa-juridica.service";

@Module({
    controllers: [DadosPessoaJuridicaController],
    providers: [DadosPessoaJuridicaService,...dadosPessoaJuridicaProvider],
    imports: [DataBaseModule]
})
export class DadosPessoaJuridicaModule {

}