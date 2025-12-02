import { PartialType } from "@nestjs/mapped-types";
import { CreateProjeto } from "./create-projeto.dto";

export class UpdateProjetoDto extends PartialType(CreateProjeto) {}