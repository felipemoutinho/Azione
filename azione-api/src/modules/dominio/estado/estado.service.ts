import { Inject, Injectable } from "@nestjs/common";
import { Estado } from "./estado.entity";

@Injectable()
export class EstadoService{
    constructor(@Inject('ESTADO_REPOSITORY') private estadoRepository: typeof Estado){

    }

    async getEstadoByUf(uf: string): Promise<Estado>{
        return this.estadoRepository.findOne({
            where: {
                uf: uf
            }
        });
    }
}