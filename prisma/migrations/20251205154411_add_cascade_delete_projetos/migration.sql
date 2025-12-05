-- DropForeignKey
ALTER TABLE "alocacoes" DROP CONSTRAINT "alocacoes_projeto_id_fkey";

-- AddForeignKey
ALTER TABLE "alocacoes" ADD CONSTRAINT "alocacoes_projeto_id_fkey" FOREIGN KEY ("projeto_id") REFERENCES "projetos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
