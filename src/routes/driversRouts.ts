import express from 'express';
import { deleteDriverController, getDriversData } from '../controllers/driversController';

const router = express.Router();

router.get('/getDrivers', getDriversData);
router.delete('/delete/:id', deleteDriverController);

export default router;