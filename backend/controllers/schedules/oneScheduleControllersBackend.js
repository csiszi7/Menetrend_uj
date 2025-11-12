const Schedule = require('../../models/Schedule.js');

exports.updateOneScheduleBackend = async (req, res) => {
    try {
        const { id, nev, ar, leiras, kepek } = req.body;
        const schedule = await Schedule.findByIdAndUpdate({ _id: id }, { nev, ar, leiras, kepek });

        res.statusCode = 201;
        return res.json({ msg: 'Sikeres módosítás!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba!' + error.message });
    }
};