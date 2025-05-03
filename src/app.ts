import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/router';
import globalErrorHandler from './app/middlewares/globalErrorHnadler';

const app:Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', router)

app.get('/', (req:Request, res:Response) => {
    res.send("Welcome to L2-Assignment-6!")
})

app.use(globalErrorHandler);

export default app;