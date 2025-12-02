import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateAlocacaoDto } from './dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from './dto/update-alocacao.dto';

@Injectable()
export class AlocacoesService {
    constructor(private prisma: PrismaService) {}

    async create(createAlocacaoDto: CreateAlocacaoDto) {
        const exists = await this.prisma.alocacoes.findUnique({
            where: {
                funcionario_id_projeto_id: {
                    funcionario_id: createAlocacaoDto.funcionario_id,
                    projeto_id: createAlocacaoDto.projeto_id,
                },
            },
        });

        if (exists) {
            throw new ConflictException('Este funcionario já está alocado nesse projeto.')
        }

        return this.prisma.alocacoes.create({
            data: createAlocacaoDto,
        });
    }

    async findAllByProjeto(projetoId: number) {
        return this.prisma.alocacoes.findMany({
            where: { projeto_id: projetoId },
            include: {
                funcionario: true,
            },
        });
    }

    async update(funcionarioId: number, projetoId: number, updateDto: UpdateAlocacaoDto) {
        try {
            return await this.prisma.alocacoes.update({
                where: {
                    funcionario_id_projeto_id: {
                        funcionario_id: funcionarioId,
                        projeto_id: projetoId,
                    },
                },
                data: updateDto,
            });
        } catch (error) {
            throw new NotFoundException('Alocação não encontrada');
        }
    }

    async remove(funcionarioId: number, projetoId: number) {
        try {
            return await this.prisma.alocacoes.delete({
                where: {
                    funcionario_id_projeto_id: {
                        funcionario_id: funcionarioId,
                        projeto_id: projetoId,
                    },
                },
            });
        } catch (error) {
            throw new NotFoundException('Alocação não encontrada');
        }
    }
}
