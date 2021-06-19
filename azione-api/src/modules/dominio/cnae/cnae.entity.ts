import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: 'cnae',
    schema: 'dominio',
    timestamps: false,
    indexes: [{unique: true, fields: ['idcnae']}],
    createdAt: false,
    updatedAt: false
})
export class Cnae extends Model<Cnae>{
    
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER,
        field: 'idcnae',
        allowNull: false
    })
    idcnae: number;
    
    @Column({
        type: DataType.STRING(16),
        allowNull: false,
        field: 'codigo_cnae'
    })
    codigoCnae: string;
    
    @Column({
        type: DataType.STRING(250),
        allowNull: false,
        field: 'desc_cnae'
    })
    descricao: string;
}