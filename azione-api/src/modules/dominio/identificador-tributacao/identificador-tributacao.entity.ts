import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: 'identificador_tributacao',
    schema: 'dominio',
    timestamps: false,
    indexes: [{unique: true, fields: ['idtributacao']}],
    createdAt: false,
    updatedAt: false
})
export class Tributacao extends Model<Tributacao>{
    
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER,
        field: 'idtributacao',
        allowNull: false
    })
    idtributacao: number;
    
    @Column({
        type: DataType.STRING(4),
        allowNull: false,
        field: 'codigo_tributacao'
    })
    codigoTributacao: string;
    
    @Column({
        type: DataType.STRING(60),
        allowNull: false,
        field: 'desc_tributacao'
    })
    descricao: string;
}