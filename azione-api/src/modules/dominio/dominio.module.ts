import { Module } from "@nestjs/common";
import { CidadeModule } from "./cidade/cidade.module";
import { CnaeModule } from "./cnae/cnae.module";
import { EstadoModule } from "./estado/estado.module";
import { PaisModule } from "./pais/pais.module";
@Module({
    providers: [],
    controllers: [],
    imports: [CidadeModule,EstadoModule,PaisModule,CnaeModule]
})
export class DominioModule{

}