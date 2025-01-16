import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler.js';
import authRouter from './routers/authRouter.js';
import './db/db.js';
import postsRouter from './routers/postRouter.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 8000;

//3rd
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/posts', postsRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`The server is running on port:${PORT}`));
