import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/core/database/database.module";
import { PaisController } from "./pais.controller";
import { paisProvider } from "./pais.providers";
import { PaisService } from "./pais.service";

@Module({
    providers: [PaisService,...paisProvider],
    controllers: [PaisController],
    imports: [DataBaseModule]
})
export class PaisModule{

}