import { Inject, Injectable } from "@nestjs/common";
import { Cnae } from "./cnae.entity";

@Injectable()
export class CnaeService {
    constructor(@Inject('cnae_repository') private cnaeRepository: typeof Cnae){

    }

    async getCnaeByCodigo(codigoCnae: string): Promise<Cnae>{
        return this.cnaeRepository.findOne({
            where: {
                codigocnae: codigoCnae
            }
        });
    }
}