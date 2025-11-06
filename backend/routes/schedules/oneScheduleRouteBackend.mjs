import express from 'express';
import { updateOneScheduleBackend } from '../../controllers/schedules/oneScheduleControllersBackend.mjs';
const router = express.Router();

router.put('/', updateOneScheduleBackend);

export default router;

