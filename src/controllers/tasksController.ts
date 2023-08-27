import { Request, Response } from 'express';
import { getAllTasks } from '../services/tasksService';
import Task from '../interfaces/taskInterface';

let tasks: Array<Task> = [];

export const getTasks = async (req: Request, res: Response) => {
  if(tasks?.length === 0) {
    try {
      tasks = await getAllTasks();
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error - getTasks' });
    }
  }
  res.json(tasks);
};
