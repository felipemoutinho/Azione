import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { Usuario } from "./usuarios.entity";
import { UsuarioService } from "./usuarios.service";

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService){

    }

    @Get(':login')
    async getByLogin(@Param('login') login: string): Promise<Usuario>{
        return this.usuarioService.getByLogin(login);
    }

    @Post()
    async create(@Body() dadosUsuario: Usuario){
        
        const exiteUsuario = await this.usuarioService.getByLogin(dadosUsuario.login);

        if(exiteUsuario){
            throw new HttpException('Já existe um usuário cadastrado com este login', HttpStatus.NOT_ACCEPTABLE);
        }
        else{
            const usuario = await this.usuarioService.create(dadosUsuario);

            if(usuario)
            {
                const {login, idpessoa} = usuario;
    
                return {login, idpessoa};
            }
            else{
                throw new HttpException('Houve uma falha em criar novo usuário', HttpStatus.INTERNAL_SERVER_ERROR); 
            }
        }
    }
}