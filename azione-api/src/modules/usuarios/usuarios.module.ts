import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/core/database/database.module";
import { UsuarioController } from "./usuarios.controller";
import { usuarioProvider } from "./usuarios.provider";
import { UsuarioService } from "./usuarios.service";

@Module({
    imports: [DataBaseModule],
    controllers: [UsuarioController],
    providers: [...usuarioProvider,UsuarioService],
    exports: [UsuarioService]
})
export class UsuarioModule{

}