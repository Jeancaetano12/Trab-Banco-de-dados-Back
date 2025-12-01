import { Module } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { FuncionariosController } from './funcionarios.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [FuncionariosController],
  providers: [FuncionariosService, PrismaService],
})
export class FuncionariosModule {}
