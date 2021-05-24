import { Table,Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: true,
    schema: 'base',
    tableName: 'pessoa',
    createdAt: 'dataInclusao',
    updatedAt: 'dataAlteracao',
    indexes: [{ unique: true, fields: ['idpessoa'] }],
})
export class Pessoa extends Model<Pessoa> {

    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER,
        comment: 'Código sequêncial único',
    })
    idpessoa: number;

    @Column({
        allowNull: false,
        type: DataType.STRING(60),
        comment: 'Código alfanumérico'
    })
    codigopessoa: string;
    
    @Column({
        type: DataType.STRING(250),
        allowNull: false,
        comment: 'Nome pessoa'
    })
    nome: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: 'Pessoa ativa = true, inativa = false'
    })
    ativa: boolean;
}