import app from '../app.js';

// new-book route kezelése.
// http://localhost:3500/api/new-book
import newBookRouter from '../../routes/newBookRoutesBackend.mjs';
app.use('/api/new-book', newBookRouter);
