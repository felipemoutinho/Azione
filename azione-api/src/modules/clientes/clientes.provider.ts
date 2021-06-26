import { Cliente } from "./clientes.entity";

export const clientesProvider = [
    {
        provide: 'CLIENTES_REPOSITORY',
        useValue: Cliente
    }
]