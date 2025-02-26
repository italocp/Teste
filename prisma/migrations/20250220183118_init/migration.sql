-- CreateTable
CREATE TABLE "usuarios" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "nome_civil" TEXT NOT NULL,
    "doc_id_org_uf" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "data_de_nascimento" TIMESTAMP(3) NOT NULL,
    "cnh" TEXT NOT NULL,
    "nome_pai" TEXT NOT NULL,
    "nome_mae" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "numero_de_registro" TEXT NOT NULL,
    "data_de_validade" TIMESTAMP(3) NOT NULL,
    "1a_habilitacao" TIMESTAMP(3) NOT NULL,
    "observacoes" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "data_de_emissao" TIMESTAMP(3) NOT NULL,
    "numero_de_validacao" TEXT NOT NULL,
    "renach" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);
