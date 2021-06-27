import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Usuario } from "./usuarios.entity";

@Injectable()
export class UsuarioService {
    constructor(@Inject('USUARIO_REPOSITORY') private usuarioRepository: typeof Usuario){

    }

    async getByLogin(login: string): Promise<Usuario>{
        return this.usuarioRepository.findOne({ where: { login } });
    }

    async create(dadosUsuario: Usuario) {
        return this.usuarioRepository.create(dadosUsuario);
    }
}