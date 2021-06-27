import { Usuario } from "./usuarios.entity";

export const usuarioProvider = [{
    provide: 'USUARIO_REPOSITORY',
    useValue: Usuario
}]