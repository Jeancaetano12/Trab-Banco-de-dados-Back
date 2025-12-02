import { Module } from '@nestjs/common';
import { AlocacoesService } from './alocacoes.service';
import { AlocacoesController } from './alocacoes.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [AlocacoesController],
  providers: [AlocacoesService, PrismaService],
})
export class AlocacoesModule {}
