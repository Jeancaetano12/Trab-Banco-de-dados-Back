import { PartialType } from "@nestjs/mapped-types";
import { CreateFuncionario } from "./create-funcionario.dto";

export class UpdateFuncionarioDto extends PartialType(CreateFuncionario) {}