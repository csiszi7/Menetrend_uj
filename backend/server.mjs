import dotenv from 'dotenv';
dotenv.config();

import path from 'node:path';
import express from 'express';
import ejs from 'ejs';

const PORT = process.env.PORT || 3500;
const app = express();

const dir = import.meta.dirname;
app.use(express.static(path.resolve(dir, 'public')));
app.set('view engine', ejs);
app.use(express.json());

import dbConnect from './utils/dbConnection.mjs';

dbConnect()
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}/api`);
        });
    })
    .catch((error) => {
        console.error(`A hiba oka: ${error.message}`);
    });

import mainRouter from './routes/mainRoutesBackend.mjs';
app.use('/api', mainRouter);


import schedulesRouter from './routes/schedules/schedulesRouteBackend.mjs';
app.use('/api/schedules-backend', schedulesRouter);

import newScheduleRouter from './routes/schedules/newScheduleRouteBackend.mjs';
app.use('/api/new-schedule', newScheduleRouter);

import oneScheduleRouter from './routes/schedules/oneScheduleRouteBackend.mjs';
app.use('/api/one-cake-backend', oneScheduleRouter);

app.use((req, res) => {
    try {
        res.statusCode = 404;
        return res.render('404.ejs');
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Általános szerver hiba!' });
    }
});