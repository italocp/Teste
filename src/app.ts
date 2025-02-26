import express from 'express';
import createUser from './function/create_user';
import getUserById from './function/get_user';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    
});

app.post('/create',  CreateUser);
app.get('/:id', getUser);

async function CreateUser(req: express.Request, res: express.Response) {
    const data = req.body;  	// Captura os dados do corpo da requisição
    const user = await createUser(data);
    res.json({ message: 'Dados recebidos', user }); // Responde com os dados recebidos
}

async function getUser(req: express.Request, res: express.Response) {
    const userId = req.params.id; // Captura o parâmetro id da URL
    const user = await getUserById(userId); // Chama a função para obter o usuário pelo id
    res.json(user); // Retorna o usuário em formato JSON
}

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
