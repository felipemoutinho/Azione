import { Table,Column, DataType, ForeignKey, BelongsTo, Model } from "sequelize-typescript";
import { Cidade } from "src/modules/dominio/cidade/cidade.entity";
import { Estado } from "src/modules/dominio/estado/estado.entity";
import { Pais } from "src/modules/dominio/pais/pais.entity";
import { Pessoa } from "../pessoa.entity";

@Table({
    timestamps: true,
    schema: 'base',
    tableName: 'pessoaendereco',
    createdAt: 'dataInclusao',
    updatedAt: 'dataAlteracao',
    indexes: [{unique: true, fields: ['idpessoaendereco', 'idpessoa']}]
})
export class PessoaEndereco extends Model<PessoaEndereco>{

    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER,
        comment: 'Chave primária da tabela pessoa endereço'
    })
    idpessoaendereco: number;

    @ForeignKey(() => Pessoa)
    @Column({
        allowNull: false,
        type: DataType.INTEGER,
        comment: 'IdPessoa relacionada ao endereço',
        field: 'idpessoa'
    })
    idpessoa: number;

    @Column({
        type: DataType.STRING(60),
        allowNull: false,
        comment: 'Endereço'
    })
    logradouro: string;

    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    bairro: string;

    @Column({
        type: DataType.STRING(10),
        allowNull: true,
        comment: 'Número do endereço'
    })
    numero: string;

    @Column({
        type: DataType.STRING(60),
        allowNull: true,
        comment: 'Complemento endereço'
    })
    complemento: string;

    @Column({
        type: DataType.STRING(10),
        allowNull: false
    })
    cep: string;

    @ForeignKey(() => Cidade)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        comment: 'Cidade',
        field: 'idcidade'
    })
    idcidade: number;

    @ForeignKey(() => Estado)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        comment: 'UF Estado'
    })
    idestado: number;
    
    @ForeignKey(() => Pais)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        comment: 'País'
    })
    idpais:number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        comment: 'Indicativo se é o endereço principal'
    })
    indprincipal: boolean;

    @BelongsTo(() => Pessoa, 'idpessoa')
    pessoa: Pessoa;

    @BelongsTo(() => Cidade, 'idcidade')
    cidade: Cidade;

    @BelongsTo(()=> Estado, 'idestado')
    estado: Estado;

    @BelongsTo(() => Pais, 'idpais')
    pais: Pais;
}