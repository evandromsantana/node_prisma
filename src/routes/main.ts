import { Router } from 'express';
import { createUser } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({
        name: 'Testador 1', 
        email: 'teste1@hotmail.com'
    });
    if(user ) {
    res.status(201).json({ user });
    } else {
        res.status(500).json({ error: "Ocorreu um erro ao criar o usuário"});
    }
})