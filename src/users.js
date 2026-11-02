/**
 * Users mock data store and helper functions
 * @module users
 */

// Mock data array for users
const users = [
  {
    user_id: 260,
    username: 'VCHar',
    password: '********',
    email: 'vchar@example.com',
    user_level_id: 1,
    created_at: '2020-09-12T06:56:41.000Z',
  },
  {
    user_id: 305,
    username: 'Donatello',
    password: '********',
    email: 'dona@example.com',
    user_level_id: 1,
    created_at: '2021-12-11T06:00:41.000Z',
  },
  {
    user_id: 3609,
    username: 'Anon5468',
    password: '********',
    email: 'x58df@example.com',
    user_level_id: 3,
    created_at: '2023-04-02T05:56:41.000Z',
  },
];

/**
 * Get all users
 * @returns {Array<Object>} List of users
 */
const getAllUsers = () => {
  return users.map((user) => {
    const userCopy = { ...user };
    delete userCopy.password;
    return userCopy;
  });
};

/**
 * Get user by ID
 * @param {number|string} id - User ID
 * @returns {Object|undefined} User object (without password) or undefined
 */
const getUserById = (id) => {
  const user = users.find((u) => u.user_id === Number(id));
  if (!user) return undefined;
  const userCopy = { ...user };
  delete userCopy.password;
  return userCopy;
};

/**
 * Add a new user
 * @param {Object} newUser - New user data
 * @returns {Object} Created user object
 */
const addUser = (newUser) => {
  const id = users.length > 0 ? Math.max(...users.map((u) => u.user_id)) + 1 : 1;
  const createdUser = {
    user_id: id,
    username: newUser.username,
    password: newUser.password || '********',
    email: newUser.email,
    user_level_id: newUser.user_level_id || 1,
    created_at: new Date().toISOString(),
  };
  users.push(createdUser);
  const userCopy = { ...createdUser };
  delete userCopy.password;
  return userCopy;
};

/**
 * Modify existing user
 * @param {number|string} id - User ID
 * @param {Object} updatedFields - Fields to update
 * @returns {Object|boolean} Updated user object or false if not found
 */
const modifyUser = (id, updatedFields) => {
  const index = users.findIndex((u) => u.user_id === Number(id));
  if (index === -1) return false;

  users[index] = { ...users[index], ...updatedFields };
  const userCopy = { ...users[index] };
  delete userCopy.password;
  return userCopy;
};

/**
 * Delete user by ID
 * @param {number|string} id - User ID
 * @returns {boolean} True if deleted, false if not found
 */
const deleteUser = (id) => {
  const index = users.findIndex((u) => u.user_id === Number(id));
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
};

export { getAllUsers, getUserById, addUser, modifyUser, deleteUser };