import { Module } from "@nestjs/common";
import { PaisController } from "./pais.controller";
import { paisProvider } from "./pais.providers";
import { PaisService } from "./pais.service";

@Module({
    providers: [PaisService,...paisProvider],
    controllers: [PaisController],
    imports: []
})
export class PaisModule{

}