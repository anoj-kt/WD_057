import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
    required: [true, 'content is required'],
  },
  image: {
    type: String,
    required: [true, 'image link is required'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Post', postSchema);
