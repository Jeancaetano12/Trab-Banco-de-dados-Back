import { IsNotEmpty, IsDecimal, IsString, IsEmail, IsDate, NotContains } from "class-validator";
import { Type } from 'class-transformer' 


export class CreateFuncionario {
    @IsString({ message: 'O nome deve ser texto' })
    @IsNotEmpty({ message: 'O campo Nome é obrigatorio' })
    nome: string;

    @IsString({ message: 'O cargo deve ser um texto' })
    @IsNotEmpty({ message: 'O campo Cargo é obrigatorio' })
    cargo: string;

    @IsEmail()
    @IsNotEmpty({ message: 'O campo Email é obrigatorio' })
    email: string;

    @IsDate()
    @IsNotEmpty({ message: 'O campo Data de constratação é obrigatorio' })
    @Type(() => Date)
    data_contratacao: Date;

    @IsDecimal()
    @NotContains('-', {message: 'O salario não pode ser negativo'})
    @IsNotEmpty({ message: 'O campo Salário é obrigatorio'})
    salario: string;
}