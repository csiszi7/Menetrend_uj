const express = require('express');
const {
    getAllSchedulesBackend,
    deleteOneScheduleBackend,
    getOneScheduleBackend,
    updateOneScheduleBackend,
} = require('../controllers/schedulesControllersBackend');
const router = express.Router();

router.get('/', getAllSchedulesBackend);
// router.get('/:id', getOneBookBackend);
// router.put('/:id', updateOneBookBackend);
// router.delete('/:id', deleteOneBookBackend);

module.exports = router;
