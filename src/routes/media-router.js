import express from 'express';
import {
  deleteMediaItem,
  getMediaItemById,
  getMediaItems,
  postMediaItem,
  putMediaItem,
} from '../controllers/media-controller.js';
import upload from '../middlewares/upload.js';
import {authenticateToken} from '../middlewares/authentication.js';
import {body, param, query} from 'express-validator';
import {validationErrors} from '../middlewares/error-handlers.js';
//import {logRequest} from '../middlewares/logger.js';

const mediaRouter = express.Router();

// use middleware for all routes (mediaRouter)
//mediaRouter.use(logRequest);

mediaRouter
  .route('/')
  .get(
    query('limit')
      .custom((value) => {
        console.log(value);
        if (!value || !isNaN(Number(value))) {
          return true;
        } else {
          return false;
        }
      })
      .withMessage('Parameteter not a number.'),
    validationErrors,
    getMediaItems,
  )
  .post(
    authenticateToken,
    upload.single('file'),
    body('title').trim().isLength({min: 2, max: 100}).escape(),
    body('description').optional().trim().isLength({max: 255}).escape(),
    validationErrors,
    postMediaItem,
  );

mediaRouter
  .route('/:id')
  .get(
    param('id').isInt({min: 1}).withMessage('ID must be a positive integer.'),
    validationErrors,
    getMediaItemById,
  )
  .put(
    authenticateToken,
    param('id').isInt({min: 1}).withMessage('ID must be a positive integer.'),
    body('title').optional().trim().isLength({min: 2, max: 100}).escape(),
    body('description').optional().trim().isLength({max: 255}).escape(),
    validationErrors,
    putMediaItem,
  )
  .delete(
    authenticateToken,
    param('id').isInt({min: 1}).withMessage('ID must be a positive integer.'),
    validationErrors,
    deleteMediaItem,
  );

export default mediaRouter;