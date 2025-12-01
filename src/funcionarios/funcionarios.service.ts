import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateFuncionario } from './dto/create-funcionario.dto';
import { PrismaService } from '../prisma.service';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Injectable()
export class FuncionariosService {
    constructor(private prisma: PrismaService) {}

    async create(funcionarioDto: CreateFuncionario) {
        // findFirst é usado por que o prisma não aceita por padrao um ID primario do tipo INT e nao consegue fazer a busca baseado nisso
        const userExists = await this.prisma.funcionarios.findFirst({
            where: {email: funcionarioDto.email}
        })

        if (userExists) {
            throw new ConflictException('Este email ja está em uso')
        }

        const criarFuncionario = await this.prisma.funcionarios.create({
            data: funcionarioDto,
        });
        return criarFuncionario;
    }

    async findAll() {
        const funcionarios = await this.prisma.funcionarios.findMany();
        return funcionarios;
    }

    async findOne(id: number) {
        const funcionario = await this.prisma.funcionarios.findUnique({
            where: { id }
        });

        if (!funcionario) {
            throw new NotFoundException(`Usuário com o ID '${id}' não encontrado.`);
        }

        return funcionario;
    }

    async update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
        await this.findOne(id);

        return this.prisma.funcionarios.update({
            where: { id },
            data: updateFuncionarioDto,
        })
    }

    async delete(id: number) {
        await this.findOne(id);

        return this.prisma.funcionarios.delete({
            where: { id }
        });
    }
}
