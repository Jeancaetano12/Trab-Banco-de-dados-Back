import { IsInt, IsNotEmpty, Min } from "class-validator";

export class UpdateAlocacaoDto {
    @IsInt()
    @IsNotEmpty()
    @Min(0)
    horas_trabalhadas: number;
}