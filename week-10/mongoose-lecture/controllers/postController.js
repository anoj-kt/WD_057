import Post from '../models/Post.js';

const createPost = async (req, res) => {
  try {
    await Post.create({
      title: 'New Title 2',
      description: 'description of post 2',
      userId: '677e46993e6423a501fcbab3',
    });
    res.send('Successfully created post');
  } catch (error) {
    res.send('Failed to create');
  }
};

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find().populate('userId', 'firstName');
    res.send(allPosts);
  } catch (error) {
    res.send('Failed to fetch');
  }
};

export { getAllPosts, createPost };
