import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService){
        super();
    }

    async validate(login: string, senha: string): Promise<any> {
        const usuario = await this.authService.validateUser(login,senha);

        if(usuario){
            return usuario;
        }
        else{
            throw new UnauthorizedException();
        }
    }
}