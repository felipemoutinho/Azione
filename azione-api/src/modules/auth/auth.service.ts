import { Injectable } from "@nestjs/common";
import { UsuarioService } from "../usuarios/usuarios.service";
import { JwtService } from '@nestjs/jwt';
import { Usuario } from "../usuarios/usuarios.entity";

@Injectable()
export class AuthService{
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService
        ){

    }

    async validateUser(login: string, senha: string): Promise<any> {
        const user = await this.usuarioService.getByLogin(login);

        if(user && user.senha === senha){
            const {login,idpessoa} = user;
            return {login,idpessoa};
        }
        return null;
    }

    async login(user: Usuario){
        const payload = { username: user.login, sub: user.idpessoa };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}