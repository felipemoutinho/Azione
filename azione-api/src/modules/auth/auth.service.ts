import { Injectable } from "@nestjs/common";
import { UsuarioService } from "../usuarios/usuarios.service";

@Injectable()
export class AuthService{
    constructor(private usuarioService: UsuarioService){

    }

    async validateUser(login: string, senha: string): Promise<any> {
        const usuario = await this.usuarioService.getByLogin(login);

        if(usuario && usuario.senha === senha){
            const {senha, ...result} = usuario;

            return result;
        }
        return null;
    }
}