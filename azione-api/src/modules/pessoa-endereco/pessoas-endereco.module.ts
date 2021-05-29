import { Module } from "@nestjs/common";
import { DataBaseModule } from "../database/database.module";


@Module({
    controllers: [],
    providers:[],
    imports: [DataBaseModule]
})
export class PessoasEnderecoModule{

}