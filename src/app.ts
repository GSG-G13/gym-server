import express, { type Express } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routers';

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api', router);

export default app;
