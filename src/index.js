import express from 'express';
import mediaRouter from './routes/media-router.js';
import userRouter from './routes/user-router.js';
import likeRouter from './routes/like-router.js'; // LISÄTTY
import {logRequest} from './middlewares/logger.js';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', 'src/views');

app.use(logRequest);
app.use(express.json());
app.use('/', express.static('public'));

app.get('/api', (req, res) => {
  res.render('index', {
    title: 'Example REST api',
    message: 'Dummy /items endpoint API for now.',
  });
});

app.use('/api/media', mediaRouter);
app.use('/api/users', userRouter);
app.use('/api/likes', likeRouter); // LISÄTTY

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});