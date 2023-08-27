import { Request, Response } from 'express';
import { getAllTasks } from '../services/tasksService';

let tasks: any = [];

export const getTasks = async (req: Request, res: Response) => {
  if(tasks?.length === 0) {
    try {
      tasks = await getAllTasks();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error - getTasks' });
      return;
    }
  }
  res.json(tasks);
};
