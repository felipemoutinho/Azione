import { Column, DataType, ForeignKey, Model, Table,BelongsTo } from "sequelize-typescript";
import { IndicadorInscEstadual } from "src/modules/dominio/indicador-inscricao-estadual/indicador-insc-estadual.entity";
import { Pessoa } from "../pessoa.entity";

@Table({
    tableName: 'dadospessoafisica',
    schema: 'base',
    timestamps: true,
    createdAt: 'dataInclusao',
    updatedAt: 'dataAlteracao',
    indexes: [{unique: true, fields: ['iddadospessoafisica', 'idpessoa']}]
})
export class DadosPessoaFisica extends Model<DadosPessoaFisica>{

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'iddadospessoafisica'
    })
    iddadospessoafisica: number;

    @ForeignKey(() => Pessoa)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field: 'idpessoa'
    })
    idpessoa: number;

    @Column({
        type: DataType.STRING(11),
        allowNull: false
    })
    cpf: string;

    @Column({
        type: DataType.STRING(20),
        allowNull: true,
        comment: 'Carteira de identidade (RG)'
    })
    identidade: string;

    @Column({
        type: DataType.DATE,
        allowNull: true
    })
    datanascimento: Date;

    @Column({
        type: DataType.CHAR(1),
        allowNull: true,
        validate: {
            isIn: [['M','F']],
            isUppercase: true
        }
    })
    sexo: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        comment: '1 - Solteiro(a) / 2 - Casado(a) / 3 - Divorciado(a) / 4 - Viúvo(a)',
        validate: {
            isIn: [['1','2','3','4']]
        }
    })
    estadocivil: number;

    @Column({
        type: DataType.STRING(60),
        allowNull: true
    })
    nomepai: string;

    @Column({
        type: DataType.STRING(60),
        allowNull: true
    })
    nomemae: string;

    @ForeignKey(() => IndicadorInscEstadual)
    @Column({
        type: DataType.INTEGER,
        field: 'idindicadorinscestadual'
    })
    idindicadorInscEstadual: number;
    
    @Column({
        type: DataType.STRING(25),
        field: 'inscricao_estadual'
    })
    inscricaoEstadual: string;

    @BelongsTo(() => Pessoa)
    pessoa: Pessoa;

    @BelongsTo(() => IndicadorInscEstadual)
    indicadorInscEstadual: IndicadorInscEstadual
}