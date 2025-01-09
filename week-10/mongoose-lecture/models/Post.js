import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: String,
  description: {
    type: String,
    maxLength: 50,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
});

const Post = model('post', postSchema);

export default Post;
