import { Pais } from "./pais.entity";

export const paisProvider = [
    {
        provide: 'PAIS_REPOSITORY',
        useValue: Pais
    }
];