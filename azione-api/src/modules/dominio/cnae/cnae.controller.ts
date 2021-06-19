import { Controller, Get, Param } from "@nestjs/common";
import { Cnae } from "./cnae.entity";
import { CnaeService } from "./cnae.service";

@Controller('cnae')
export class CnaeController {

    constructor(private cnaeService: CnaeService){

    }

    @Get(':codigoCnae')
    async getCnaeByCodigo(@Param('codigoCnae') codigoCnae: string): Promise<Cnae>{
        return this.cnaeService.getCnaeByCodigo(codigoCnae);
    }

    @Get()
    async getAll():Promise<Cnae[]> {
        return this.cnaeService.getAll();
    }
}