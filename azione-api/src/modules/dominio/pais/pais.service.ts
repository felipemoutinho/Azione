import { Inject, Injectable } from "@nestjs/common";
import { Pais } from "./pais.entity";

@Injectable()
export class PaisService {
    constructor(@Inject('PAIS_REPOSITORY') private paisRepositoty: typeof Pais){

    }

    async getById(idpais: number): Promise<Pais>{
        return this.paisRepositoty.findByPk(idpais);
    }
}