import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/core/database/database.module";
import { TributacaoController } from "./identificador-tributacao.controller";
import { tributacaoProvider } from "./identificador-tributacao.provider";
import { TributacaoService } from "./identificador-tributacao.service";


@Module({
    controllers: [TributacaoController],
    providers: [...tributacaoProvider, TributacaoService],
    imports: [DataBaseModule]
})
export class TributacaoModule{

}