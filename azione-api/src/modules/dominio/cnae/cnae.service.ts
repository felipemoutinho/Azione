import { Inject, Injectable } from "@nestjs/common";
import { Cnae } from "./cnae.entity";

@Injectable()
export class CnaeService {
    constructor(@Inject('cnae_repository') private cnaeRepository: typeof Cnae){

    }

    async getCnaeByCodigo(codigoCnae: string): Promise<Cnae>{
        
        const codigoFormatado = codigoCnae.replace(/^(\d{4})(\d{1})(\d{2})/,"$1-$2/$3")
        
        return this.cnaeRepository.findOne({
            where: {
                codigoCnae: codigoFormatado
            }
        });
    }

    async getAll(): Promise<Cnae[]>{
        return this.cnaeRepository.findAll();
    }
}