import { Inject, Injectable } from "@nestjs/common";
import { Cliente } from "./clientes.entity";
import { DadosClientePF } from "./clientes.model";

@Injectable()
export class ClientesService {
    constructor(@Inject('CLIENTES_REPOSITORY') private clientesRepository: typeof Cliente){

    }

    async getAll():Promise<Cliente[]>{
        return this.clientesRepository.findAll();
    }

    async getByIdPessoa(idpessoa: number): Promise<Cliente>{
        return this.clientesRepository.findOne({
            where: {
                idpessoa: idpessoa
            }
        });
    }

    async delete(idpessoa: number){
        return this.clientesRepository.destroy({
            where: {
                idpessoa: idpessoa
            }
        });
    }

    async create(cliente: Cliente): Promise<Cliente>{
        return this.clientesRepository.create(cliente);
    }

    async update(cliente: Cliente): Promise<[number,Cliente[]]> {
        return this.clientesRepository.update(
            cliente, {
                where: {
                    idpessoa: cliente.idpessoa
                }
            }
        );
    }
}