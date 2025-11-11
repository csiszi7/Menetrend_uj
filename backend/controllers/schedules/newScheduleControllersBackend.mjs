import ScheduleModel from "../../models/Schedule.mjs";
import {
        jarat, 
        allomasok, 
        kedvezmeny, 
        kortablak, 
        idotartam, 
        idopontok, 
        induloallomas, 
        celallomas 
} from "../../public/schedules/js/adatok.mjs";

export const getNewSchedule = (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('new-schedule.ejs', {jarat, allomasok, kedvezmeny, kortablak, idotartam, idopontok, induloallomas, celallomas});
    } catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
};

export const postNewSchedule = async (req, res) => {
    try {
        const { nev, ar, leiras, kepek } = req.body;

        const newSchedule = new Cake({ nev, ar, leiras, kepek });
        await newSchedule.save();

        res.statusCode = 201;
        return res.json({ msg: 'Sikeres feltöltés!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba!' + error.message });
    }
};
