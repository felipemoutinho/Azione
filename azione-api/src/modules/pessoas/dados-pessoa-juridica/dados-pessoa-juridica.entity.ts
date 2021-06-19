import { Table,Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Cnae } from "src/modules/dominio/cnae/cnae.entity";
import { Tributacao } from "src/modules/dominio/identificador-tributacao/identificador-tributacao.entity";
import { IndicadorInscEstadual } from "src/modules/dominio/indicador-inscricao-estadual/indicador-insc-estadual.entity";
import { Pessoa } from "../pessoa.entity";

@Table({
    tableName: 'dadospessoajuridica',
    schema: 'base',
    timestamps: true,
    createdAt: 'dataInclusao',
    updatedAt: 'dataAlteracao',
    indexes: [{unique: true, fields: ['iddadospessoajuridica', 'idpessoa']}]
})
export class DadosPessoaJuridica extends Model<DadosPessoaJuridica> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'iddadospessoajuridica'
    })
    iddadospessoajuridica: number;
    
    @ForeignKey(() => Pessoa)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field: 'idpessoa'
    })
    idpessoa: number;
    
    @Column({
        type: DataType.STRING(14),
        allowNull: false
    })
    cnpj: string;
    
    @Column({
        type: DataType.STRING(60),
        allowNull: false,
        field: 'razaosocial'
    })
    razaoSocial: string;
    
    @Column({
        type: DataType.STRING(50),
        allowNull: true,
        field: 'nomefantasia'
    })
    nomeFantasia: string;
    
    @Column({
        type: DataType.STRING(20),
        field: 'inscricao_municipal'
    })
    inscricaoMunicipal: string;
    
    @ForeignKey(() => Cnae)
    @Column({
        type: DataType.INTEGER,
        field: 'idcnae'
    })
    idcnae: number;

    @Column({
        type: DataType.STRING(20),
        field: 'suframa'
    })
    suframa: string;
    
    @ForeignKey(() => IndicadorInscEstadual)
    @Column({
        type: DataType.INTEGER,
        field: 'idindicadorinsestadual'
    })
    idincadorInscEstadual: number;
    
    @Column({
        type: DataType.STRING(25),
        field: 'inscricao_estadual'
    })
    inscricaoEstadual: string;
    
    @ForeignKey(() => Tributacao)
    @Column({
        type: DataType.INTEGER,
        field: 'idtributacao',
        comment: 'Tributação relacionada a empresa'
    })
    idtributacao: number;
    
    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: 'data_fundacao'
    })
    dataFundacao: Date;
    
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    bloqueada: boolean;

    @BelongsTo(() => Pessoa)
    pessoa: Pessoa;

    @BelongsTo(() => Cnae, 'idcnae')
    cnae: Cnae;

    @BelongsTo(() => Tributacao, 'idtributacao')
    tributacao: Tributacao;

    @BelongsTo(() => IndicadorInscEstadual, 'idindicadorinsestadual')
    indicadorInscEstadual: IndicadorInscEstadual
}