const Schedule = require('../models/schedule');
const { jarat, allomasok, kortablak, idotartamok, idopontok, kedvezmenyek, induloallomas, celallomas, indulasideje, visszaideje, klima, helyjegy } = require('../public/js/adatok');

exports.getNewScheduleBackend = (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('new-schedule.ejs', { jarat, allomasok, kortablak, idotartamok, idopontok, kedvezmenyek, induloallomas, celallomas, indulasideje, visszaideje, klima, helyjegy });
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
       kortablak, 
       idotartamok, 
       idopontok, 
       kedvezmenyek, 
       induloallomas, 
       celallomas, 
       indulasideje, 
       visszaideje, 
       klima, 
       helyjegy
        } = req.body;

        const irok = szerzok.split(',');

        const newSchedule = new Schedule({
        jarat, 
        allomasok, 
        kortablak, 
        idotartamok, 
        idopontok, 
        kedvezmenyek, 
        induloallomas, 
        celallomas, 
        indulasideje, 
        visszaideje, 
        klima, 
        helyjegy
        });

        await newSchedule.save();

        res.statusCode = 201;
        return res.json({ msg: 'Sikeres feltöltés!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba történt!' });
    }
};
