-- 1. Cria a função que faz a lógica
CREATE OR REPLACE FUNCTION atualizar_status_projeto()
RETURNS TRIGGER AS $$
BEGIN
    -- Atualiza a tabela projetos
    -- Define status para 'Em_Andamento' e atualiza a data updateAt
    -- APENAS SE o status atual for 'Em_Planejamento'
    UPDATE projetos
    SET status = 'Em_Andamento',
        "updateAt" = NOW()
    WHERE id = NEW.projeto_id
    AND status = 'Em_Planejamento';

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2. Cria o gatilho (Trigger) que chama a função
CREATE TRIGGER trigger_iniciar_projeto
AFTER INSERT ON alocacoes
FOR EACH ROW
EXECUTE FUNCTION atualizar_status_projeto();