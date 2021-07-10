import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { Estado } from "./estado.entity";
import { EstadoService } from "./estado.service";

@Controller('estado')
export class EstadoController {
    constructor(private estadoService: EstadoService){

    }

    @UseGuards(JwtAuthGuard)
    @Get(':uf')
    async getEstadoByUf(@Param('uf') uf:string): Promise<Estado>{
        return this.estadoService.getEstadoByUf(uf.toUpperCase());
    }
}