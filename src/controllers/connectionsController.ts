import { Request, Response } from 'express';
import { getAllDriversTasks, writeAllDriversTasks } from '../services/driversTasksService';

//key: taskId , value: driverId
const connections = new Map<string, string>();

export const getConnections = (req: Request, res: any) => {
  res.status(200).end();
};

export const assignDriverToTask = (req: Request, res: any) => {
  console.log(req);
  res.status(200).end();
};
