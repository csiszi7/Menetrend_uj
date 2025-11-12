const express = require('express');
const { updateOneScheduleBackend } = require('../../controllers/schedules/oneScheduleControllersBackend.js');
const router = express.Router();

router.put('/', updateOneScheduleBackend);

module.exports = router;

