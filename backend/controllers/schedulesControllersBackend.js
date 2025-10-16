const Schedule = require('../models/schedule');
const { jarat, allomasok, kortablak, idotartamok, idopontok, kedvezmenyek } = require('../public/js/adatok');

exports.getAllSchedulesBackend = async (req, res) => {
    try {
        const schedules = await Schedule.find({});
        res.statusCode = 200;
        return res.render('schedules.ejs', { schedules });
    } catch (error) {
        res.statusCode = 500;
        return res.render('404.ejs');
    }
};

exports.getOneScheduleBackend = async (req, res) => {
    try {
        const { id } = req.params;
        const schedule = await Schedule.findById({ _id: id });

        res.statusCode = 200;
        return res.render('schedule.ejs', { book, zsanerek, kedvezmenyek });
    } catch (error) {
        res.statusCode = 500;
        return res.render('404.ejs');
    }
};

exports.updateOneScheduleBackend = async (req, res) => {
    try {
        const { id } = req.params;
        const {
        jarat,
        allomasok,
        kedvezmenyek,
        kortablak,
        idotartamok,
        idopontok, 
            igenvagyNem
        } = req.body;
        const irok = szerzok.split(',');
        const schedule = await Schedule.findByIdAndUpdate(
            { _id: id },
            {
        jarat,
        allomasok,
        kedvezmenyek,
        kortablak,
        idotartamok,
        idopontok, 
            }
        );

        res.statusCode = 200;
        return res.json({ msg: 'Sikeres módosítás!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba történt!' });
    }
};

exports.deleteOneScheduleBackend = async (req, res) => {
    try {
        const { id } = req.params;
        const schedule = await Schedule.findByIdAndDelete({ _id: id });

        res.statusCode = 204;
        return res.json({ msg: 'Sikeres törlés!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba történt!' });
    }
};
