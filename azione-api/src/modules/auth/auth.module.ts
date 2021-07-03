import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsuarioModule } from "../usuarios/usuarios.module";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { LocalStrategy } from "./strategy/local.strategy";

@Module({
    providers: [AuthService, LocalStrategy, JwtStrategy],
    imports: [
        UsuarioModule, 
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {
                expiresIn: '1000s'
            }
        }),
    ],
    exports: [
        AuthService
    ]
})
export class AuthModule {

}