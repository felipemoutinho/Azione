import { Table,Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
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
        field: 'inscricaomunicipal'
    })
    inscricaoMunicipal: string;
    
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
    
    @Column({
        type: DataType.INTEGER,
        field: 'indicadorinscricaoestadual'
    })
    indicadorInscEstadual: number;
    
    @Column({
        type: DataType.STRING(25),
        field: 'inscricaoestadual'
    })
    inscricaoEstadual: string;
    
    @Column({
        type: DataType.INTEGER,
        field: 'identificacao'
    })
    identificacao: number;
    
    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: 'datafundacao'
    })
    dataFundacao: Date;
    
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    bloqueada: boolean;

    @BelongsTo(() => Pessoa)
    pessoa: Pessoa;
}