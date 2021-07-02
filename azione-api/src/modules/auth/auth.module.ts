import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UsuarioModule } from "../usuarios/usuarios.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";

@Module({
    providers: [AuthService, LocalStrategy],
    imports: [UsuarioModule, PassportModule]
})
export class AuthModule {

}