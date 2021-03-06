import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors()); //exemplo aberto para todos acessarem
//exemplo de produção:
/*
app.use(cors({
    origin: 'http://localhost:3000' //endereço real da aplicação frontend
}))
*/
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server running!');
});