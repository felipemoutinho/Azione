import { Table, Model, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Pessoa } from "../pessoas/pessoa.entity";

@Table({
    tableName: 'dadosusuario',
    schema: 'base',
    timestamps: true,
    createdAt: 'dataInclusao',
    updatedAt: 'dataAlteracao',
    indexes: [{unique: true, fields: ['iddadosusuario','idpessoa']}]
})
export class Usuario extends Model<Usuario> {

    @Column({
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: 'iddadosusuario',
        type: DataType.INTEGER
    })
    iddadosusuario: number;
    
    @ForeignKey(() => Pessoa)
    @Column({
        allowNull: false,
        field: 'idpessoa',
        type: DataType.INTEGER
    })
    idpessoa: number;
    
    @Column({
        allowNull: false,
        type: DataType.STRING(60)
    })
    login: string;
    
    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    senha: string;
}
