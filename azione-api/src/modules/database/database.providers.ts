import { Sequelize } from "sequelize-typescript";
import { Cidade } from "../dominio/cidade/cidade.entity";
import { Cnae } from "../dominio/cnae/cnae.entity";
import { Estado } from "../dominio/estado/estado.entity";
import { Tributacao } from "../dominio/identificador-tributacao/identificador-tributacao.entity";
import { IndicadorInscEstadual } from "../dominio/indicador-inscricao-estadual/indicador-insc-estadual.entity";
import { Pais } from "../dominio/pais/pais.entity";
import { DadosPessoaFisica } from "../pessoas/dados-pessoa-fisica/dados-pessoa-fisica.entity";
import { DadosPessoaJuridica } from "../pessoas/dados-pessoa-juridica/dados-pessoa-juridica.entity";
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
            sequelize.addModels([
                Pessoa,
                PessoaContato,
                PessoaEndereco,
                DadosPessoaFisica,
                DadosPessoaJuridica,
                Pais,
                Estado,
                Cidade,
                Cnae,
                Tributacao,
                IndicadorInscEstadual]);
            await sequelize.sync();
            return sequelize;
        },
    },
];