import { Controller, Post, Get, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AlocacoesService } from './alocacoes.service';
import { CreateAlocacaoDto } from './dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from './dto/update-alocacao.dto';

@Controller('alocacoes')
export class AlocacoesController {
  constructor(private readonly alocacoesService: AlocacoesService) {}

  @Post()
  create(@Body() createAlocacaoDto: CreateAlocacaoDto) {
    console.log('Requisicao criar alocacao recebida.')
    return this.alocacoesService.create(createAlocacaoDto);
  }

  @Get('projeto/:id')
  findAllByProjeto(@Param('id', ParseIntPipe) id: number) {
    console.log('Requisicao de listar funcionarios de projeto especifico recebida')
    return this.alocacoesService.findAllByProjeto(id)
  }

  @Patch('funcionario/:fid/projeto/:pid')
  update(
    @Param('fid', ParseIntPipe) funcionarioId: number,
    @Param('pid', ParseIntPipe) projetoId: number,
    @Body() updateDto: UpdateAlocacaoDto,
  ) {
    console.log('Requisicao de atualizar horas recebida')
    return this.alocacoesService.update(funcionarioId, projetoId, updateDto);
  }

  @Delete('funcionario/:fid/projeto/:pid')
  remove(
    @Param('fid', ParseIntPipe) funcionarioId: number,
    @Param('pid', ParseIntPipe) projetoId: number,
  ) {
    console.log('Requisicao de remover funcionario do projeto recebida')
    return this.alocacoesService.remove(funcionarioId, projetoId);
  }
}
