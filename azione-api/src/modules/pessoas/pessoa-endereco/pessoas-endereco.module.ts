import { Module } from "@nestjs/common";
import { DataBaseModule } from "../../../core/database/database.module";
import { PessoaEnderecoService } from "./pessoa-endereco.service";
import { PessoaEnderecoController } from "./pessoas-endereco.controller";
import { pessoaEnderecoProvider } from "./pessoas-endereco.providers";


@Module({
    controllers: [PessoaEnderecoController],
    providers:[PessoaEnderecoService,...pessoaEnderecoProvider],
    imports: [DataBaseModule],
    exports: [PessoaEnderecoService]
})
export class PessoasEnderecoModule{

}