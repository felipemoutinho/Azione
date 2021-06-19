import { Module } from "@nestjs/common";
import { CidadeModule } from "./cidade/cidade.module";
import { CnaeModule } from "./cnae/cnae.module";
import { EstadoModule } from "./estado/estado.module";
import { TributacaoModule } from "./identificador-tributacao/identificador-tributacao.module";
import { IndicadorInscEstadualModule } from "./indicador-inscricao-estadual/indicador-insc-estadual.module";
import { PaisModule } from "./pais/pais.module";
@Module({
    providers: [],
    controllers: [],
    imports: [CidadeModule,EstadoModule,PaisModule,CnaeModule,TributacaoModule,IndicadorInscEstadualModule]
})
export class DominioModule{

}