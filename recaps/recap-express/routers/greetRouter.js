import express from 'express';
import {
  generalGreet,
  greetWithName,
  greetWithNameAndEmail,
} from '../controllers/greet.js';

const greetRouter = express.Router();

greetRouter.route('/').get(generalGreet).post(greetWithName);
greetRouter.route('/withemail').post(greetWithNameAndEmail);

export default greetRouter;
