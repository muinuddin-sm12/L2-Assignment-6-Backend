import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app:Application = express();

app.use(express.json());
app.use(cors());


app.get('/', (req:Request, res:Response) => {
    res.send("Hello from L2-Assignment-6!")
})

export default app;