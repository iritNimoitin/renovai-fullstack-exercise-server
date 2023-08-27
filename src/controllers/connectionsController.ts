import { Request, Response } from 'express';

//key: taskId , value: driverId
const connections = new Map<string, string>();

export const getConnections = (req: Request, res: Response) => {
  const connectionsArray = Array.from(connections.entries()).map(([taskId, driverId]) => ({
    taskId,
    driverId,
  }));
  res.send(connectionsArray);
};

export const assignDriverToTask = (req: Request, res: Response) => {
  const taskId: string = req.body.taskId;
  const driverId: string = req.body.driverId;
  if(!taskId) {
    return res.status(500).json({ error: 'Missing taskId - assignDriverToTask' });
  }
  if(!driverId) {
    return res.status(500).json({ error: 'Missing driverId - assignDriverToTask' });
  }
  connections.set(taskId, driverId);
  res.json("Success");
};
