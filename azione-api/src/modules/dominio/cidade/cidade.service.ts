import { Inject, Injectable } from "@nestjs/common";
import { Cidade } from "./cidade.entity";

@Injectable()
export class CidadeService {
    constructor(@Inject('CIDADE_REPOSITORY') private cidadeRepository: typeof Cidade){

    }

    async getCidadeByName(nomeCidade: string): Promise<Cidade> {
        return this.cidadeRepository.findOne({
            where: {
                nome: nomeCidade
            }
        });
    }
}