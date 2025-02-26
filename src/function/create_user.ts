import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser(data: { nome: string; nomeCivil: string; docIdOrgUf: string; cpf: string; dataNascimento: string; cnh: string; nomePai: string; nomeMae: string; categoria: string; numeroRegistro: string; dataValidade: string; primeiraHabilitacao: string; observacoes: string; local: string; uf: string; dataEmissao: string; numeroValidacao: string; renach: string }) {   
    // Lógica para criar um usuário no banco de dados
    const newUser = {
        nome: data.nome,
        nomeCivil: data.nomeCivil,
        docIdOrgUf: data.docIdOrgUf,
        cpf: data.cpf,
        dataNascimento: data.dataNascimento,
        cnh: data.cnh,
        nomePai: data.nomePai,
        nomeMae: data.nomeMae,
        categoria: data.categoria,
        numeroRegistro: data.numeroRegistro,
        dataValidade: data.dataValidade,
        primeiraHabilitacao: data.primeiraHabilitacao,
        observacoes: data.observacoes,
        local: data.local,
        uf: data.uf,
        dataEmissao: data.dataEmissao,
        numeroValidacao: data.numeroValidacao,
        renach: data.renach,
    };

    // Salvar o novo usuário no banco de dados usando Prisma
    const savedUser = await prisma.usuarios.create({
        data: newUser,
    });

    // Retornar uma resposta
    return { success: true, user: savedUser.id };
}

export default createUser;