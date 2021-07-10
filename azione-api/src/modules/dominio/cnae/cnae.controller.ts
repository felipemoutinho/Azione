import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { Cnae } from "./cnae.entity";
import { CnaeService } from "./cnae.service";

@Controller('cnae')
export class CnaeController {

    constructor(private cnaeService: CnaeService){

    }

    @UseGuards(JwtAuthGuard)
    @Get(':codigoCnae')
    async getCnaeByCodigo(@Param('codigoCnae') codigoCnae: string): Promise<Cnae>{
        return this.cnaeService.getCnaeByCodigo(codigoCnae);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll():Promise<Cnae[]> {
        return this.cnaeService.getAll();
    }
}