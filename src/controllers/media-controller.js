import {
  addMediaItem,
  fetchAllMediaItems,
  findMediaItemById,
  modifyMediaItem,
  removeMediaItem,
} from '../models/media-model.js';

const getMediaItems = async (req, res, next) => {
  const limit = req.query.limit ? Number(req.query.limit) : undefined;
  const items = await fetchAllMediaItems(limit);
  if (items.error) {
    const error = new Error(items.error);
    error.status = 500;
    return next(error);
  }
  res.json(items);
};

const getMediaItemById = async (req, res, next) => {
  const mediaItem = await findMediaItemById(req.params.id);
  if (mediaItem) {
    if (mediaItem.error) {
      const error = new Error(mediaItem.error);
      error.status = 500;
      return next(error);
    }
    res.json(mediaItem);
  } else {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  }
};

const postMediaItem = async (req, res, next) => {
  if (!req.file) {
    const error = new Error('File is required');
    error.status = 400;
    return next(error);
  }
  // pikapurkka, TODO: fix
  req.body.user_id = req.user.user_id;
  console.log('new media item (mediaController)', {...req.body, ...req.file});
  const media_id = await addMediaItem({...req.body, ...req.file});
  if (media_id.error) {
    const error = new Error(media_id.error);
    error.status = 500;
    return next(error);
  }
  res.status(201).json({message: 'New media item added.', media_id});
};

const putMediaItem = async (req, res, next) => {
  const updatedItem = await modifyMediaItem(req.params.id, req.body);
  // TODO: implement MODEL
  if (!updatedItem) {
    const error = new Error('Item not found!');
    error.status = 404;
    return next(error);
  }
  res.json({message: 'Media updated!', updatedItem});
};

const deleteMediaItem = async (req, res, next) => {
  const affectedRows = await removeMediaItem(req.params.id, req.user);
  if (affectedRows && affectedRows.error) {
    const error = new Error(affectedRows.error);
    error.status = 500;
    return next(error);
  }
  if (affectedRows < 1) {
    const error = new Error('Item not found!');
    error.status = 404;
    return next(error);
  }
  res.json({message: 'Media deleted!'});
};

export {
  getMediaItems,
  getMediaItemById,
  postMediaItem,
  putMediaItem,
  deleteMediaItem,
};