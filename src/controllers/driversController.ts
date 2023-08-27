import { Request, Response } from 'express';
import { deleteDriver, getAllDrivers } from '../services/driversService';

export const getDriversData = async (req: Request, res: Response) => {
    try {
        const data = await getAllDrivers();
        res.json(data);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error - getDriversData' });
      }
};

export const deleteDriverController = async (req: Request, res: Response) => {
    const driverId = req.params.id;
    try {
      const updatedDrivers = await deleteDriver(driverId);
      res.json(updatedDrivers);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error - deleteDriverController' });
    }
  };