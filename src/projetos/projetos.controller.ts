import { Controller, Post, Get, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { ProjetosService } from './projetos.service';

@Controller('projetos')
export class ProjetosController {
  constructor(private readonly projetosService: ProjetosService) {}
}
