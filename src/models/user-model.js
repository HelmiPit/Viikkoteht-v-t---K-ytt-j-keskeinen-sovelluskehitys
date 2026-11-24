import promisePool from '../utils/database.js';

const selectAllUsers = async () => {
  try {
    const sql = 'SELECT user_id, username, email, user_level_id, created_at FROM Users';
    const [rows] = await promisePool.execute(sql);
    return rows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const selectUserById = async (id) => {
  try {
    const sql = 'SELECT user_id, username, email, user_level_id, created_at FROM Users WHERE user_id = ?';
    const [rows] = await promisePool.execute(sql, [id]);
    return rows[0];
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const selectUserByUsername = async (username) => {
  try {
    // prepared statement suojaa sql-injektioilta
    const sql = 'SELECT * FROM Users WHERE username = ?';
    const params = [username];
    const result = await promisePool.execute(sql, params);
    const [rows] = result;
    //console.log('whole result object', result);
    //console.log('rows', rows);
    return rows[0];
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const addUser = async (user) => {
  const {username, password, email, user_level_id} = user;
  const sql = `INSERT INTO Users (username, password, email, user_level_id)
               VALUES (?, ?, ?, ?)`;
  const params = [username, password, email, user_level_id];
  try {
    const [rows] = await promisePool.execute(sql, params);
    return rows.insertId;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const modifyUser = async (targetUserId, modifiedUser, currentUser) => {
  const {username, email, password} = modifiedUser;
  let sql, params;
  try {
    if (currentUser.user_level_id == 1) {
      sql = 'UPDATE Users SET username = ?, email = ?, password = ? WHERE user_id = ?';
      params = [username, email, password, targetUserId];
    } else {
      sql = 'UPDATE Users SET username = ?, email = ?, password = ? WHERE user_id = ? AND user_id = ?';
      params = [username, email, password, targetUserId, currentUser.user_id];
    }
    const [rows] = await promisePool.execute(sql, params);
    return rows.affectedRows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const removeUser = async (targetUserId, currentUser) => {
  let sql, params;
  try {
    if (currentUser.user_level_id == 1) {
      sql = 'DELETE FROM Users WHERE user_id = ?';
      params = [targetUserId];
    } else {
      sql = 'DELETE FROM Users WHERE user_id = ? AND user_id = ?';
      params = [targetUserId, currentUser.user_id];
    }
    const [rows] = await promisePool.execute(sql, params);
    return rows.affectedRows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

export {
  selectAllUsers,
  selectUserById,
  selectUserByUsername,
  addUser,
  modifyUser,
  removeUser,
};