/**
 * Entry point for Express REST API Server
 * @module index
 */

import express from 'express';
import {
  addMediaItem,
  deleteMediaItem,
  getAllMediaItems,
  getMediaItemById,
  modifyMediaItem,
} from './media.js';
import {
  addUser,
  deleteUser,
  getAllUsers,
  getUserById,
  modifyUser,
} from './users.js';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', 'src/views');

// Parse incoming request body as JSON
app.use(express.json());

// Serve static assets from public folder (e.g. index.html, script.js)
app.use('/', express.static('public'));

// Requirement 5: Serve static media files from public/uploads or public/media folder
app.use('/media', express.static('public/media'));

/**
 * Route GET / -> Render Pug HTML page (Requirement 1 & 3)
 */
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Media API Portal',
    message: 'Explore and interact with available REST endpoints.',
  });
});

/**
 *  MEDIA ENDPOINTS (/api/media)
 */

/**
 * GET /api/media - Retrieve all media items with optional limit query
 */
app.get('/api/media', (req, res) => {
  const items = getAllMediaItems(req.query.limit);
  res.status(200).json(items);
});

/**
 * GET /api/media/:id - Retrieve media item by ID
 */
app.get('/api/media/:id', (req, res) => {
  const mediaItem = getMediaItemById(req.params.id);
  if (mediaItem) {
    res.status(200).json(mediaItem);
  } else {
    res.status(404).json({ error: 404, message: 'Media item not found' });
  }
});

/**
 * POST /api/media - Add new media item
 */
app.post('/api/media', (req, res) => {
  const { title, filename, user_id } = req.body;
  if (!title || !filename || !user_id) {
    return res
      .status(400)
      .json({ error: 400, message: 'Missing required fields: title, filename, or user_id' });
  }
  const newItem = addMediaItem(req.body);
  res.status(201).json({ message: 'New media item added.', item: newItem });
});

/**
 * PUT /api/media/:id - Update existing media item
 */
app.put('/api/media/:id', (req, res) => {
  const updatedItem = modifyMediaItem(req.params.id, req.body);
  if (!updatedItem) {
    return res.status(404).json({ error: 404, message: 'Media item not found!' });
  }
  res.status(200).json({ message: 'Media updated!', updatedItem });
});

/**
 * DELETE /api/media/:id - Delete media item by ID
 */
app.delete('/api/media/:id', (req, res) => {
  const success = deleteMediaItem(req.params.id);
  if (!success) {
    return res.status(404).json({ error: 404, message: 'Media item not found!' });
  }
  res.status(200).json({ message: 'Media item deleted!' });
});

/**
 *  USER ENDPOINTS (/api/users)
 */

/**
 * GET /api/users - Retrieve all users
 */
app.get('/api/users', (req, res) => {
  const allUsers = getAllUsers();
  res.status(200).json(allUsers);
});

/**
 * GET /api/users/:id - Retrieve user by ID
 */
app.get('/api/users/:id', (req, res) => {
  const user = getUserById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 404, message: 'User not found' });
  }
});

/**
 * POST /api/users - Create a new user
 */
app.post('/api/users', (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res
      .status(400)
      .json({ error: 400, message: 'Missing required fields: username or email' });
  }
  const createdUser = addUser(req.body);
  res.status(201).json({ message: 'User created successfully', user: createdUser });
});

/**
 * PUT /api/users/:id - Modify existing user
 */
app.put('/api/users/:id', (req, res) => {
  const updatedUser = modifyUser(req.params.id, req.body);
  if (!updatedUser) {
    return res.status(404).json({ error: 404, message: 'User not found!' });
  }
  res.status(200).json({ message: 'User updated!', user: updatedUser });
});

/**
 * DELETE /api/users/:id - Delete user by ID
 */
app.delete('/api/users/:id', (req, res) => {
  const success = deleteUser(req.params.id);
  if (!success) {
    return res.status(404).json({ error: 404, message: 'User not found!' });
  }
  res.status(200).json({ message: 'User deleted!' });
});

/**
 * 404 FALLBACK ROUTE
 */
app.use((req, res) => {
  res.status(404).json({ error: 404, message: 'Resource not found' });
});

// Start listening for HTTP connections
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});