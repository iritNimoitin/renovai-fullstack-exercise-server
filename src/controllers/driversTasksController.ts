import { Request, Response } from 'express';
import { getAllDriversTasks, writeAllDriversTasks } from '../services/driversTasksService';

export const getDriversTasksData = async (req: Request, res: Response) => {
    try {
        const data = await getAllDriversTasks();
        res.json(data);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error - getDriversTasksData' });
      }
};

export const writeDriversTasksData = async (req: Request, res: Response) => {
  try {
      const data = await writeAllDriversTasks(req.body);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error - writeDriversTasksData' });
    }
};