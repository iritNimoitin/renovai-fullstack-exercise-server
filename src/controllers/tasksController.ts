import { getAllTasks } from "../services/tasksService";
import { Request, Response } from 'express';

export const getTasksData = async (req: Request, res: Response) => {
    try {
        const data = await getAllTasks();
        res.json(data);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error - getTasksData' });
      }
};