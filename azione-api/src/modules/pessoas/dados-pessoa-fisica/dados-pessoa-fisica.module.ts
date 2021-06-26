import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/core/database/database.module";
import { DadosPessoaFisicaController } from "./dados-pessoa-fisica.controller";
import { dadosPessoaFisicaProvider } from "./dados-pessoa-fisica.provider";
import { DadosPessoaFisicaService } from "./dados-pessoa-fisica.service";

@Module({
    controllers: [DadosPessoaFisicaController],
    providers: [DadosPessoaFisicaService,...dadosPessoaFisicaProvider],
    imports: [DataBaseModule]
})
export class DadosPessoaFisicaModule{

}