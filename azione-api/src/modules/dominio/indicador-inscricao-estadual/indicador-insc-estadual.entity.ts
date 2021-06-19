import { Table, Model, Column, DataType } from "sequelize-typescript";


@Table({
    tableName: 'indicador-inscricao-estadual',
    schema: 'dominio',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    indexes: [{
        unique: true,
        fields: ['idindicadorinsestadual']
    }]
})
export class IndicadorInscEstadual extends Model<IndicadorInscEstadual> {
    
    @Column({
        primaryKey: true,
        allowNull: false,
        type: DataType.INTEGER,
        autoIncrement: true,
        field: 'idindicadorinsestadual'
    })
    idindicadorinscestadual: number;
    
    @Column({
        type: DataType.STRING(4),
        allowNull: false,
        field: 'codigo_indicador'
    })
    codigoIndicador: string;
    
    @Column({
        type: DataType.STRING(50),
        allowNull: false,
        field: 'desc_indicador'
    })
    descricaoIndicador: string;
}