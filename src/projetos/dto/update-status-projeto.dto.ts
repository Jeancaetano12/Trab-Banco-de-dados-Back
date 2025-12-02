import { Status } from "../../generated/prisma/enums";
import { IsEnum, IsNotEmpty } from "class-validator";

export class UpdateStatusDto {
    @IsNotEmpty({message: 'O Status é obrigatorio'})
    @IsEnum(Status, {message: 'O status deve ser válido: Em_Planejamento, Em_Andamento ou Concluido'})
    status: Status;
}