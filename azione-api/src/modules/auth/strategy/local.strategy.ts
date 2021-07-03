import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService){
        super({
            usernameField: 'login',
            passwordField: 'senha'
        });
    }

    async validate(login: string, senha: string): Promise<any> {
        const usuario = await this.authService.validateUser(login,senha);
        if(!usuario){
            throw new UnauthorizedException();
        }
        return usuario;
    }
}