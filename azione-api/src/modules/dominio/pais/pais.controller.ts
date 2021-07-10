import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { Pais } from "./pais.entity";
import { PaisService } from "./pais.service";

@Controller('pais')
export class PaisController {
    constructor(private paisService: PaisService){

    }

    @UseGuards(JwtAuthGuard)
    @Get(':idpais')
    async getPaisById(@Param('idpais') idpais: number): Promise<Pais>{
        return this.paisService.getById(idpais);
    }
}