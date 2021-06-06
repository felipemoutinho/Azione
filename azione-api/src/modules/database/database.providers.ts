import { Sequelize } from "sequelize-typescript";
import { Cidade } from "../dominio/cidade/cidade.entity";
import { Estado } from "../dominio/estado/estado.entity";
import { Pais } from "../dominio/pais/pais.entity";
import { PessoaContato } from "../pessoas/pessoa-contato/pessoa-contato.entity";
import { PessoaEndereco } from "../pessoas/pessoa-endereco/pessoa-endereco.entity";
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
            sequelize.addModels([Pessoa,PessoaContato,PessoaEndereco,Pais,Estado,Cidade]);
            await sequelize.sync();
            return sequelize;
        },
    },
];