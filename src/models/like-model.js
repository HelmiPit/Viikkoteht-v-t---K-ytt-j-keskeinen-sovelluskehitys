import promisePool from '../utils/database.js';

const fetchLikesByMediaId = async (mediaId) => {
  try {
    const sql = 'SELECT * FROM Likes WHERE media_id = ?';
    const [rows] = await promisePool.execute(sql, [mediaId]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const fetchLikesByUserId = async (userId) => {
  try {
    const sql = 'SELECT * FROM Likes WHERE user_id = ?';
    const [rows] = await promisePool.execute(sql, [userId]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const addLike = async (like) => {
  const {media_id, user_id} = like;
  const sql = 'INSERT INTO Likes (media_id, user_id) VALUES (?, ?)';
  try {
    const [rows] = await promisePool.execute(sql, [media_id, user_id]);
    return rows.insertId;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const deleteLikeById = async (id) => {
  const sql = 'DELETE FROM Likes WHERE like_id = ?';
  try {
    const [result] = await promisePool.execute(sql, [id]);
    if (result.affectedRows === 0) {
      return false;
    }
    return true;
  } catch (e) {
    console.error('error', e.message);
    return false;
  }
};

export {
  fetchLikesByMediaId,
  fetchLikesByUserId,
  addLike,
  deleteLikeById,
};