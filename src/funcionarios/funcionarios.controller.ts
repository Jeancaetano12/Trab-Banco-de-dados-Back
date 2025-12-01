import { Controller, Post, Get, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { CreateFuncionario } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Controller('funcionarios')
export class FuncionariosController {
  constructor(private readonly funcionariosService: FuncionariosService) {}

  @Post()
  createFuncionario(@Body() funcionarioDto: CreateFuncionario) {
    console.log('Requisicao de criar funcionario recebida')
    return this.funcionariosService.create(funcionarioDto);
  }

  @Get()
  findAll() {
    console.log('Requisicao de puxar todos os funcionarios recebida')
    return this.funcionariosService.findAll()
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFuncionarioDto: UpdateFuncionarioDto) {
    console.log(`Requisicao update recebida para o ID: ${id}`);
    return this.funcionariosService.update(id, updateFuncionarioDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id:number) {
    console.log(`Requisicao delete recebida pro id: ${id}`)
    return this.funcionariosService.delete(id);
  }
}
