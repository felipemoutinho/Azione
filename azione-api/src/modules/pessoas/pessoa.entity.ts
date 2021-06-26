import { Table,Model, Column, DataType, HasMany, HasOne } from "sequelize-typescript";
import { Cliente } from "../clientes/clientes.entity";
import { DadosPessoaFisica } from "./dados-pessoa-fisica/dados-pessoa-fisica.entity";
import { DadosPessoaJuridica } from "./dados-pessoa-juridica/dados-pessoa-juridica.entity";
import { PessoaContato } from "./pessoa-contato/pessoa-contato.entity";
import { PessoaEndereco } from "./pessoa-endereco/pessoa-endereco.entity";

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

    @HasMany(() => PessoaContato)
    pessoaContato: PessoaContato[]

    @HasMany(() => PessoaEndereco)
    pessoaEndereco: PessoaEndereco[];

    @HasOne(() => DadosPessoaFisica)
    pessoaFisica: DadosPessoaFisica;

    @HasOne(() => DadosPessoaJuridica)
    pessoaJuridica: DadosPessoaJuridica;

    @HasOne(() => Cliente)
    cliente: Cliente;
}