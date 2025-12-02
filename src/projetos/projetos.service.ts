import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateProjeto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { UpdateStatusDto } from './dto/update-status-projeto.dto';

@Injectable()
export class ProjetosService {
    constructor(private prisma: PrismaService) {}

    async create(projetoDto: CreateProjeto) {
        const projetoExists = await this.prisma.projetos.findFirst({
            where: { nome: projetoDto.nome }
        });

        if (projetoExists) {
            throw new ConflictException('Não podem existir dois projetos com o mesmo nome')
        }

        const criarProjeto = await this.prisma.projetos.create({
            data: projetoDto,
        });

        return criarProjeto;
    }

    async findAll() {
        const projetos = await this.prisma.projetos.findMany();
        return projetos;
    }

    async findOne(id: number) {
        const projeto = await this.prisma.projetos.findUnique({
            where: { id }
        });

        if (!projeto) {
            throw new NotFoundException('Projeto nao encontrado')
        }

        return projeto;
    }

    async updateProjeto(id: number, updateProjetoDto: UpdateProjetoDto) {
        await this.findOne(id);

        return this.prisma.projetos.update({
            where: { id },
            data: updateProjetoDto,
        });
    }

    async updateStatus(id: number, updateStatusDto: UpdateStatusDto) {
        await this.findOne(id);

        return this.prisma.projetos.update({
            where: { id },
            data: updateStatusDto,
        });
    }

    async delete(id: number) {
        await this.findOne(id);

        return this.prisma.projetos.delete({
            where: {id}
        })
    }
}
