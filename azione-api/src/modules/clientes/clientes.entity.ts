import { Table,Model, Column, DataType, ForeignKey,BelongsTo } from "sequelize-typescript";
import { Pessoa } from "../pessoas/pessoa.entity";


@Table({
    tableName: 'dadoscliente',
    schema: 'base',
    timestamps: true,
    createdAt: 'dataInclusao',
    updatedAt: 'dataAlteracao',
    indexes: [{unique: true, fields: ['iddadoscliente','idpessoa']}]
})
export class Cliente extends Model<Cliente> {
    
    @Column({
        primaryKey: true,
        allowNull: false,
        type: DataType.INTEGER,
        field: 'iddadoscliente',
        autoIncrement: true
    })
    iddadoscliente: number;
    
    @ForeignKey(() => Pessoa)
    @Column({
        allowNull: false,
        type: DataType.INTEGER,
        field: 'idpessoa'
    })
    idpessoa: number;
    
    @Column({
        allowNull: true,
        type: DataType.STRING(200)
    })
    observacao: string;

    @BelongsTo(() => Pessoa)
    pessoa: Pessoa;
}