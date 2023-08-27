import express from 'express';
import { getTasksData } from '../controllers/tasksController';

const router = express.Router();

router.get('/getTasks', getTasksData);

export default router;