import {  Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Cidade } from '../cidade/cidade.entity';
import { Estado } from '../estado/estado.entity';

@Table({
    timestamps: true,
    createdAt: 'dataInclusao',
    updatedAt: 'dataAtualizacao',
    schema: 'dominio',
    indexes: [{unique: true, fields: ['idpais']}],
    tableName: 'pais'
})
export class Pais extends Model<Pais>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'idpais'
    })
    idpais: number;
    
    @Column({
        type: DataType.STRING(60),
        allowNull: false,
        comment: 'Nome do país em Portugês'
    })
    nomePais: string;
    
    @Column({
        type: DataType.STRING(60),
        allowNull: false,
        comment: 'Nome do país em Inglês'
    })
    nomePaisIngles: string;

    @HasMany(() => Estado,'idpais')
    estados: Estado[];

    @HasMany(() => Cidade,'idpais')
    cidades: Cidade[];
}

