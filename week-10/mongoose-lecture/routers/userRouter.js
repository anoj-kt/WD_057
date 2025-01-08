import express from 'express';
import {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/:id', getSingleUser);
userRouter.route('/').get(getAllUsers).post(createUser).put(updateUser);

export default userRouter;
