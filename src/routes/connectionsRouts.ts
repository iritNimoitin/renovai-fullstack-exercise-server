import express from 'express';
import { getConnections, assignDriverToTask } from '../controllers/connectionsController';


const router = express.Router();

router.get('/getConnections', getConnections);
router.post('/assignDriverToTask', assignDriverToTask); 

export default router;