const Schedule = require('../models/schedule');
const { jaratok, napok, kedvezmenyek } = require('../public/js/adatok');

exports.getNewScheduleBackend = (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('new-schedule.ejs', { zsanerek, kedvezmenyek });
    } catch (error) {
        res.statusCode = 500;
        return res.render('404.ejs');
    }
};

exports.postNewScheduleBackend = async (req, res) => {
    try {
        const {
        jarat,
        allomasok,
        kedvezmenyek,
        kortablak,
        idotartamok,
        idopontok, 
        } = req.body;

        const irok = szerzok.split(',');

        const newSchedule = new Schedule({
        jarat,
        allomasok,
        kedvezmenyek,
        kortablak,
        idotartamok,
        idopontok, 
        });

        await newSchedule.save();

        res.statusCode = 201;
        return res.json({ msg: 'Sikeres feltöltés!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba történt!' });
    }
};
