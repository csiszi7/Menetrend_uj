import app from '../app.js';

// books-backend route kezelése.
// http://localhost:3500/api/books-backend
import allBooksRouter from '../../routes/allBooksRoutesBackend.js';
app.use('/api/books-backend', allBooksRouter);
