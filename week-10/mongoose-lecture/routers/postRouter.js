import express from 'express';
import { createPost, getAllPosts } from '../controllers/postController.js';

const postRouter = express.Router();

postRouter.route('/').get(getAllPosts).post(createPost);

export default postRouter;
