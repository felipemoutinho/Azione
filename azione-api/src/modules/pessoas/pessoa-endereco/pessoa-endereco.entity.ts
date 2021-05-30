import { Table,Column, DataType, ForeignKey } from "sequelize-typescript";
import { Pessoa } from "../pessoa.entity";

@Table({
    timestamps: true,
    schema: 'base',
    tableName: 'pessoaendereco',
    createdAt: 'dataInclusao',
    updatedAt: 'dataAlteracao',
    indexes: [{unique: true, fields: ['idpessoaendereco']}]
})
export class PessoaEndereco{

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
        comment: 'IdPessoa relacionada ao endereço'
    })
    idpessoa: number;

}