import express from 'express';
import {
  generalMiddlewareOne,
  generalMiddlewareTwo,
} from './middlewares/generalMiddleware.js';
import greetRouter from './routers/greetRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const port = 3000;

app.use(express.json());

// Middleware 1
app.use(generalMiddlewareOne);

// Middleware 2
app.use(generalMiddlewareTwo);

app.use('/greet', greetRouter);

// ErrorHandler
app.use(errorHandler);

// Listening to a certain port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
