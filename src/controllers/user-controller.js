import {
  addUser,
  modifyUser,
  removeUser,
  selectAllUsers,
  selectUserById,
} from '../models/user-model.js';

const getUsers = async (req, res) => {
  const users = await selectAllUsers();
  res.json(users);
};

const getUserById = async (req, res) => {
  const user = await selectUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({error: 404, message: 'User not found.'});
  }
};

const postUser = async (req, res) => {
  const newUser = req.body;
  newUser.user_level_id = 2;
  const user_id = await addUser(newUser);
  if (user_id.error) {
    return res.status(400).json({error: 400, message: user_id.error});
  }
  res.status(201).json({message: 'New user added.', user_id});
};

const putUser = async (req, res) => {
  const affectedRows = await modifyUser(req.params.id, req.body, req.user);
  if (!affectedRows || affectedRows < 1) {
    return res.status(403).json({error: 403, message: 'Not authorized or user not found.'});
  }
  res.json({message: 'User updated.'});
};

const deleteUser = async (req, res) => {
  const affectedRows = await removeUser(req.params.id, req.user);
  if (!affectedRows || affectedRows < 1) {
    return res.status(403).json({error: 403, message: 'Not authorized or user not found.'});
  }
  res.json({message: 'User deleted.'});
};

export {getUsers, getUserById, postUser, putUser, deleteUser};