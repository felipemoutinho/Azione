import { Inject, Injectable } from "@nestjs/common";
import { Tributacao } from "./identificador-tributacao.entity";

@Injectable()
export class TributacaoService {
    constructor(@Inject('tributacao_repository') private tributacaoRepository: typeof Tributacao){

    }

    async getTributacaoByCodigo(codigoTributacao: string): Promise<Tributacao>{
        return this.tributacaoRepository.findOne({
            where: {
                codigocnae: codigoTributacao
            }
        });
    }
}