const dotenv = require('dotenv');
dotenv.config();

const path = require('node:path');
const express = require('express');
const ejs = require('ejs');
const cors = require('cors');

const PORT = process.env.PORT || 3500;
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', ejs);
app.use(express.json());
app.use(cors());

const dbConnect = require('./utils/dbConnection.js');

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

const mainRouter = require('./routes/mainRoutesBackend.js');
app.use('/api', mainRouter);

const schedulesBackendRouter = require('./routes/schedules/schedulesRouteBackend.js');
app.use('/api/schedules-backend', schedulesBackendRouter);

const schedulesFrontendRouter = require('./routes/schedules/schedulesRoutesFrontend.js');
app.use('/api/schedules-frontend', schedulesFrontendRouter);

const newScheduleRouter = require('./routes/schedules/newScheduleRouteBackend.js');
app.use('/api/new-schedule', newScheduleRouter);

const oneScheduleRouter = require('./routes/schedules/oneScheduleRouteBackend.js');
app.use('/api/one-schedule-backend', oneScheduleRouter);

app.use((req, res) => {
    try {
        res.statusCode = 404;
        return res.render('404.ejs');
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Általános szerver hiba!' });
    }
});
