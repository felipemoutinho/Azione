import { Sequelize } from "sequelize-typescript";
import { Cliente } from "src/modules/clientes/clientes.entity";
import { Cidade } from "../../modules/dominio/cidade/cidade.entity";
import { Cnae } from "../../modules/dominio/cnae/cnae.entity";
import { Estado } from "../../modules/dominio/estado/estado.entity";
import { Tributacao } from "../../modules/dominio/identificador-tributacao/identificador-tributacao.entity";
import { IndicadorInscEstadual } from "../../modules/dominio/indicador-inscricao-estadual/indicador-insc-estadual.entity";
import { Pais } from "../../modules/dominio/pais/pais.entity";
import { DadosPessoaFisica } from "../../modules/pessoas/dados-pessoa-fisica/dados-pessoa-fisica.entity";
import { DadosPessoaJuridica } from "../../modules/pessoas/dados-pessoa-juridica/dados-pessoa-juridica.entity";
import { PessoaContato } from "../../modules/pessoas/pessoa-contato/pessoa-contato.entity";
import { PessoaEndereco } from "../../modules/pessoas/pessoa-endereco/pessoa-endereco.entity";
import { Pessoa } from "../../modules/pessoas/pessoa.entity";

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
                Cliente,
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