import {addUser} from '../models/user-model.js';

const postUser = async (req, res, next) => {
  const newUser = req.body;
  newUser.user_level_id = 2;
  const user_id = await addUser(newUser);
  if (user_id.error) {
    const error = new Error(user_id.error);
    error.status = 400;
    return next(error);
  }
  res.status(201).json({message: 'New user added.', user_id});
};

export {postUser};