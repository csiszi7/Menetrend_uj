import express from 'express';
import { getMain } from '../controllers/mainControllersBackend.mjs';
const router = express.Router();

router.get('/', getMain);

export default router;