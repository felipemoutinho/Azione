import { Controller, Get, Param } from "@nestjs/common";
import { Pais } from "./pais.entity";
import { PaisService } from "./pais.service";

@Controller('pais')
export class PaisController {
    constructor(private paisService: PaisService){

    }

    @Get(':idpais')
    async getPaisById(@Param('idpais') idpais: number): Promise<Pais>{
        return this.paisService.getById(idpais);
    }
}