import { Module } from "@nestjs/common";
import { CidadeModule } from "./cidade/cidade.module";
import { EstadoModule } from "./estado/estado.module";
import { PaisModule } from "./pais/pais.module";
@Module({
    providers: [],
    controllers: [],
    imports: [CidadeModule,EstadoModule,PaisModule]
})
export class DominioModule{

}