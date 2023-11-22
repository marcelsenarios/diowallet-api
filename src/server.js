import express, { json } from 'express';
import authRouter from './routers/authRoutes.js';
import transactionRouter from './routers/transactionRoutes.js';
import { connectDb } from './config/database.js';

const app = express();

connectDb();
app.use(json());

app.use(authRouter);
app.use(transactionRouter);

app.listen(process.env.PORT, ()=> console.log(`Ouvindo a porta ${process.env.PORT}`));