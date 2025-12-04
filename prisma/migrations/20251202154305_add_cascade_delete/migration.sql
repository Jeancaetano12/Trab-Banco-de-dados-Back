-- DropForeignKey
ALTER TABLE "alocacoes" DROP CONSTRAINT "alocacoes_funcionario_id_fkey";

-- AddForeignKey
ALTER TABLE "alocacoes" ADD CONSTRAINT "alocacoes_funcionario_id_fkey" FOREIGN KEY ("funcionario_id") REFERENCES "funcionarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
