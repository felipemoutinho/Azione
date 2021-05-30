import { Sequelize } from "sequelize-typescript";
import { PessoaContato } from "../pessoas/pessoa-contato/pessoa-contato.entity";
import { Pessoa } from "../pessoas/pessoa.entity";

export const dataBaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 49153,
                username: 'docker',
                password: 'Aa123456',
                database: 'postgres',
            });
            sequelize.addModels([Pessoa,PessoaContato]);
            await sequelize.sync();
            return sequelize;
        },
    },
];