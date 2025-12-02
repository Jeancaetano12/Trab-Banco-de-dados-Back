import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { ProjetosModule } from './projetos/projetos.module';
import { AlocacoesModule } from './alocacoes/alocacoes.module';

@Module({
  imports: [FuncionariosModule, ProjetosModule, AlocacoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
