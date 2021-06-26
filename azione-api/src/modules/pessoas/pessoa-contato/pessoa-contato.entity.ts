import { Table,Model,Column,DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Pessoa } from "../pessoa.entity";
@Table({
    timestamps: true,
    schema: 'base',
    tableName: 'pessoacontato',
    createdAt: 'dataInclusao',
    updatedAt: 'dataAlteracao',
    indexes: [{ unique: true, fields: ['idpessoacontato','idpessoa','idtipocontato'] }],
})
export class PessoaContato extends Model<PessoaContato>{
    
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER,
        comment: 'Código sequêncial único',
    })
    idpessoacontato: number;
    
    @ForeignKey(() => Pessoa)
    @Column({
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: DataType.INTEGER,
        comment: 'Código Idpessoa',
    })
    idpessoa: number;

    @Column({
        allowNull:false,
        type: DataType.INTEGER,
        comment: '1-Telefone Residencial / 2-Telefone Comercial /3-E-mail /4-fax /5-Telefone Celular / ' + 
        '6-Telefone de cobrança/7-Telefone de referência /8-Visita Técnica /9-Acesso Remoto /10-Site',
    })
    idtipocontato:number;

    @Column({
        allowNull: false,
        type: DataType.STRING(50),
        comment: 'Descrição do contato relacionada ao tipo contato'
    })
    descricaocontato: string;

    @Column({
        allowNull: false,
        type: DataType.BOOLEAN,
        comment: 'Indicativo se o contato é principal'
    })
    indcontatoprincipal: boolean;

    @BelongsTo(() => Pessoa)
    pessoa: Pessoa;
}