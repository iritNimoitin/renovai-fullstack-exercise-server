import express from 'express';
import { getDriversTasksData, writeDriversTasksData } from '../controllers/driversTasksController';


const router = express.Router();

router.get('/getDriversTasks', getDriversTasksData);
router.post('/writeDriversTasks', writeDriversTasksData); 

export default router;