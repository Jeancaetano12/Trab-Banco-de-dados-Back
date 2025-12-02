import { IsNotEmpty, IsInt, IsDate, IsNumber, Min } from "class-validator";
import { Type } from "class-transformer";

export class CreateAlocacaoDto {
    @IsInt({ message: 'O ID do funcionário deve ser um número inteiro' })
    @IsNotEmpty()
    funcionario_id: number;

    @IsInt({ message: 'O ID do projeto deve ser um número inteiro' })
    @IsNotEmpty()
    projeto_id: number;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    data_alocacao: Date;

    @IsInt({ message: 'Horas trabalhadas deve ser um número inteiro' }) // Ou IsNumber se aceitar decimal
    @Min(0)
    horas_trabalhadas: number;
}