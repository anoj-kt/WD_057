import { Router } from 'express';
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from '../controllers/post.js';
import verifyToken from '../middlewares/verifyToken.js';

const postsRouter = Router();

postsRouter.route('/').get(getAllPosts).post(verifyToken, createPost);

postsRouter
  .route('/:id')
  .get(getPostById)
  .put(verifyToken, updatePost)
  .delete(verifyToken, deletePost);

export default postsRouter;
