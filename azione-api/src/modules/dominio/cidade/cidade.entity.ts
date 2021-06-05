import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Estado } from "../estado/estado.entity";
import { Pais } from "../pais/pais.entity";

@Table({
    tableName: 'cidades',
    schema: 'dominio',
    timestamps: true,
    createdAt: 'datainclusao',
    updatedAt: 'dataalteracao',
    indexes: [{ unique: true, fields: [ 'idcidade', 'idestado', 'idpais' ] }]
})

export class Cidade extends Model<Cidade> {
    
    @Column({
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataType.INTEGER,
        field: 'idcidade'
    })
    idcidade: number;
    
    @Column({
        type: DataType.STRING(60),
        allowNull: false,
        comment: 'Nome da Cidade'
    })
    nome: string;
    
    @ForeignKey(() => Estado)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field: 'idestado'
    })
    idestado: number;
    
    @ForeignKey(() => Pais)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field: 'idpais',
        defaultValue: 33
    })
    idpais: number;

    @BelongsTo(() => Estado)
    estado: Estado;
    
    @BelongsTo(() => Pais)
    pais: Pais;
}