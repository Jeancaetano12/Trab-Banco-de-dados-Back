import { Controller, Post, Get, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { ProjetosService } from './projetos.service';
import { CreateProjeto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { UpdateStatusDto } from './dto/update-status-projeto.dto';

@Controller('projetos')
export class ProjetosController {
  constructor(private readonly projetosService: ProjetosService) {}

  @Post()
  createProjeto(@Body() projetoDto: CreateProjeto) {
    console.log('Requisicao criar projeto recebida')
    return this.projetosService.create(projetoDto);
  }

  @Get()
  findAll() {
    console.log('Requisicao de puxar todos os projetos recebida')
    return this.projetosService.findAll();
  }

  // Atualizar projeto no geral
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateProjetoDto: UpdateProjetoDto) {
    console.log('Requisicao de atualizar projeto recebida');
    return this.projetosService.updateProjeto(id, updateProjetoDto);
  }

  // Atualizar Status do projeto
  @Patch(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStatusDto: UpdateStatusDto
  ) {
    console.log('Requisicao atualizar status do projeto recebida')
    return this.projetosService.updateStatus(id, updateStatusDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    console.log('Requisicao delete recebida')
    return this.projetosService.delete(id);
  }
}
