import express from 'express';
import pictureUploader from '../../middlewares/pictureToCloudinary.mjs';
import { getNewSchedule, postNewSchedule } from '../../controllers/schedules/newScheduleControllersBackend.mjs';
const router = express.Router();

router.get('/', getNewSchedule);
router.post('/', pictureUploader, postNewSchedule);

export default router;