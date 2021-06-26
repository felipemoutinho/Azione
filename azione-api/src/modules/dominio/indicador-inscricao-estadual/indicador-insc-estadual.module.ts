import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/core/database/database.module";
import { IndicadorInscEstadualController } from "./indicador-insc-estadual.controller";
import { indicadorInscEstadualProvider } from "./indicador-insc-estadual.provider";
import { IndicadorInscEstadualService } from "./indicador-insc-estadual.service";

@Module({
    controllers: [IndicadorInscEstadualController],
    providers: [...indicadorInscEstadualProvider, IndicadorInscEstadualService],
    imports: [DataBaseModule]
})
export class IndicadorInscEstadualModule {

}