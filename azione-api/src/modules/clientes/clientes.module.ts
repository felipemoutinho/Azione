import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/core/database/database.module";
import { PessoasModule } from "../pessoas/pessoas.module";
import { ClientesController } from "./clientes.controller";
import { clientesProvider } from "./clientes.provider";
import { ClientesService } from "./clientes.service";

@Module({
    controllers: [ClientesController],
    providers: [...clientesProvider, ClientesService],
    imports: [DataBaseModule,PessoasModule],
    exports: [ClientesService]
})
export class ClientesModule {

}