import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/modules/database/database.module";
import { CnaeController } from "./cnae.controller";
import { cnaeProvider } from "./cnae.provider";
import { CnaeService } from "./cnae.service";

@Module({
    controllers: [CnaeController],
    providers: [...cnaeProvider, CnaeService],
    imports: [DataBaseModule]
})
export class CnaeModule{

}