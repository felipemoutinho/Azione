import { Estado } from "./estado.entity";

export const estadoProvider = [{
    provide: 'ESTADO_REPOSITORY',
    useValue: Estado
}]