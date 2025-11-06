import express from 'express';
import pictureDeleter from '../../middlewares/pictureDeleteFromCloudinary.mjs';
import { deleteOneScheduleBackend, getAllSchedulesBackend, getOneScheduleBackend } from '../../controllers/schedules/scheduleControllersBackend.mjs';
const router = express.Router();

router.get('/', getAllSchedulesBackend);
router.get('/:id', getOneScheduleBackend);
router.delete('/:id', pictureDeleter, deleteOneScheduleBackend);

export default router;
