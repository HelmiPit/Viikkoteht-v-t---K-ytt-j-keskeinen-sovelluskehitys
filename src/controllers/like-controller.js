import {
  addLike,
  deleteLikeById,
  fetchLikesByMediaId,
  fetchLikesByUserId,
} from '../models/like-model.js';

const getLikesByMediaId = async (req, res) => {
  const likes = await fetchLikesByMediaId(req.params.id);
  res.json(likes);
};

const getLikesByUserId = async (req, res) => {
  const likes = await fetchLikesByUserId(req.params.id);
  res.json(likes);
};

const postLike = async (req, res) => {
  if (!req.body.media_id || !req.body.user_id) {
    return res.status(400).json({error: 400, message: 'media_id or user_id missing.'});
  }
  const like_id = await addLike(req.body);
  if (like_id.error) {
    return res.status(500).json(like_id);
  }
  res.status(201).json({message: 'Like added.', like_id});
};

const deleteLike = async (req, res) => {
  const success = await deleteLikeById(req.params.id);
  if (!success) {
    return res.status(404).json({error: 404, message: 'Like not found.'});
  }
  res.json({message: 'Like deleted.'});
};

export {
  getLikesByMediaId,
  getLikesByUserId,
  postLike,
  deleteLike,
};