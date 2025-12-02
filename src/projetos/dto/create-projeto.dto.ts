import { IsNotEmpty, IsString, IsDate } from "class-validator";
import { Type } from 'class-transformer';

export class CreateProjeto {
    @IsString({message: 'O nome do projeto deve ser texto'})
    @IsNotEmpty({message: 'O campo nome é obrigatorio'})
    nome: string; 

    @IsString({message: 'A descricao do projeto deve ser texto'})
    @IsNotEmpty({message: 'O campo descricao é obrigatorio'})
    descricao: string;

    @IsDate()
    @IsNotEmpty({message: 'O campo data de inicio é obrigatorio'})
    @Type(() => Date)
    data_inicio: Date; 

    @IsDate()
    @IsNotEmpty({message: 'O campo previsao de termino é obrigatorio'})
    @Type(() => Date)
    data_previsao_termino: Date; 
    
}

