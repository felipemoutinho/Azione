import { Controller, Get, Param } from "@nestjs/common";
import { Estado } from "./estado.entity";
import { EstadoService } from "./estado.service";

@Controller('estado')
export class EstadoController {
    constructor(private estadoService: EstadoService){

    }

    @Get(':uf')
    async getEstadoByUf(@Param('uf') uf:string): Promise<Estado>{
        return this.estadoService.getEstadoByUf(uf);
    }
}