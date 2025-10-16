const express = require('express');
const {
    getNewScheduleBackend,
    postNewScheduleBackend,
} = require('../controllers/newScheduleControllersBackend');
const router = express.Router();

router.get('/', getNewScheduleBackend);
router.post('/', postNewScheduleBackend);

module.exports = router;
