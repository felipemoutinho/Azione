import { Cnae } from "./cnae.entity";

export const cnaeProvider = [{
    provide: 'cnae_repository',
    useValue: Cnae
}]