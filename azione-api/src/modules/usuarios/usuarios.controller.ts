import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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
        return this.usuarioService.create(dadosUsuario);
    }
}