import User from '../models/User.js';

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.send(allUsers);
  } catch (error) {
    res.status(500).send('Failed to get all users');
  }
};

const createUser = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;

    await User.create({
      firstName,
      lastName,
    });
    res.send('User created!');
  } catch (error) {
    res.status(500).send('Failed to create user');
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const singleUser = await User.findById(id);
    res.send(singleUser);
  } catch (error) {
    res.status(500).send('Failed to get all users');
  }
};

const updateUser = async (req, res) => {
  try {
    await User.updateOne({ firstName: 'John' }, { firstName: 'Max' });
    res.send('Updated!');
  } catch (error) {
    res.status(500).send('Failed to update');
  }
};

export { getAllUsers, getSingleUser, createUser, updateUser };
