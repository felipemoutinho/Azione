import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/core/database/database.module";
import { CidadeController } from "./cidade.controller";
import { cidadeProvider } from "./cidade.providers";
import { CidadeService } from "./cidade.service";

@Module({
    providers: [CidadeService, ...cidadeProvider],
    controllers: [CidadeController],
    imports: [DataBaseModule]
})
export class CidadeModule{

}