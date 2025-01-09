import express from 'express';
import './db/dbConnection.js';
import userRouter from './routers/userRouter.js';
import postRouter from './routers/postRouter.js';

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/user', postRouter);

app.listen(3000, () => {
  console.log('Server is running!');
});
