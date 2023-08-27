import { Request, Response } from 'express';
import { getAllDrivers } from '../services/driversService';

let drivers: any = [];

export const getDrivers = async (req: Request, res: Response) => {
  if(drivers?.length === 0) {
    try {
      drivers = await getAllDrivers();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error - getDrivers' });
      return;
    }
  }
  res.json(drivers);
};
