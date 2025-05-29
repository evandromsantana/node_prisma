import { Router } from 'express';
import { createUser, createUsers, getAllUsers, getUserByEmail } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({
        name: 'Testador 2', 
        email: 'teste2@hotmail.com',
        Posts: {
            create: {
                title: 'Titulo de teste do testador 2',
                body: 'Corpo de teste do testador 2',

            }
        }
    });
    if(user ) {
    res.status(201).json({ user });
    } else {
        res.status(500).json({ error: "Ocorreu um erro ao criar o usuário"});
    }
})

mainRouter.post('/users', async (req, res ) => {
    const result = await createUsers([        
      { name: 'João', email: 'joao@hotmail.com'},
      { name: 'Maria', email: 'maria@hotmail.com'},
      { name: 'José', email: 'jose@gmail.com'},
      { name: 'Ana', email: 'ana@gmail.com'},
      { name: 'Pedro', email: 'pedro@gmail.com'},
    ]);
    res.json({ result });
})

mainRouter.get('/users', async (req, res) => {
    const result = await getAllUsers();
    res.json({ result});
})

mainRouter.get('/user', async (req, res) => {
    const result = await getUserByEmail('joao@hotmail.com');
    res.json({ result});
})