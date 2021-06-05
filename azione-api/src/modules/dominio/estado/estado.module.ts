import { Module } from "@nestjs/common";
import { EstadoController } from "./estado.controller";
import { estadoProvider } from "./estado.providers";
import { EstadoService } from "./estado.service";

@Module({
    providers: [EstadoService, ...estadoProvider],
    controllers: [EstadoController],
    imports: []
})
export class EstadoModule{

}