-- CreateTable
CREATE TABLE "Clube" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "escudo" TEXT,
    "fundacao" TIMESTAMP(3) NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "associacao" TEXT NOT NULL,

    CONSTRAINT "Clube_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unidade" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "clubeId" INTEGER NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Unidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "foto" TEXT,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "cargo" TEXT[] DEFAULT ARRAY['desbravador']::TEXT[],
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnidadeMembros" (
    "unidadeId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "UnidadeMembros_pkey" PRIMARY KEY ("unidadeId","usuarioId")
);

-- CreateTable
CREATE TABLE "Classe" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Classe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Especialidade" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Especialidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClasseToUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EspecialidadeToUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ClasseToUsuario_AB_unique" ON "_ClasseToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_ClasseToUsuario_B_index" ON "_ClasseToUsuario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EspecialidadeToUsuario_AB_unique" ON "_EspecialidadeToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_EspecialidadeToUsuario_B_index" ON "_EspecialidadeToUsuario"("B");

-- AddForeignKey
ALTER TABLE "Unidade" ADD CONSTRAINT "Unidade_clubeId_fkey" FOREIGN KEY ("clubeId") REFERENCES "Clube"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnidadeMembros" ADD CONSTRAINT "UnidadeMembros_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnidadeMembros" ADD CONSTRAINT "UnidadeMembros_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClasseToUsuario" ADD CONSTRAINT "_ClasseToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Classe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClasseToUsuario" ADD CONSTRAINT "_ClasseToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EspecialidadeToUsuario" ADD CONSTRAINT "_EspecialidadeToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Especialidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EspecialidadeToUsuario" ADD CONSTRAINT "_EspecialidadeToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
