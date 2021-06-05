import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Cidade } from '../cidade/cidade.entity';
import { Pais } from '../pais/pais.entity';
@Table({
    schema: 'dominio',
    timestamps: true,
    createdAt: 'dataInclusao',
    updatedAt: 'dataAlteracao',
    indexes: [{unique: true, fields: ['idestado', 'idpais']}],
    tableName: 'estados'
})
export class Estado extends Model<Estado> {
    
    @Column({
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'idestado',
        type: DataType.NUMBER
    })
    idestado: number;
    
    @Column({
        allowNull: false,
        type: DataType.STRING(60),
        comment: 'Nome do Estado'
    })
    nome: string;
    
    @Column({
        allowNull: false,
        type: DataType.CHAR(2),
        comment: 'UF'
    })
    uf: string;
    
    @ForeignKey(() => Pais)
    @Column({
        allowNull: true,
        type: DataType.INTEGER,
        field: 'idpais'
    })
    idpais: number;
    
    @BelongsTo(() => Pais)
    pais: Pais;

    @HasMany(() => Cidade, 'idestado')
    cidades: Cidade[];
}