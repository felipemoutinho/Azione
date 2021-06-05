import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/modules/database/database.module";
import { EstadoController } from "./estado.controller";
import { estadoProvider } from "./estado.providers";
import { EstadoService } from "./estado.service";

@Module({
    providers: [EstadoService, ...estadoProvider],
    controllers: [EstadoController],
    imports: [DataBaseModule]
})
export class EstadoModule{

}