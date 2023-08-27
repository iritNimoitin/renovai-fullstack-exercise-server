import { Request, Response } from "express";

//key: taskId , value: driverId
const connections = new Map<string, string | undefined>();

export const getConnections = (req: Request, res: Response) => {
  const json = JSON.stringify(Object.fromEntries(connections));
  res.send(json);
};

export const assignDriverToTask = (req: Request, res: Response) => {
  const taskId: string = req.body.taskId;
  const driverId: string = req.body.driverId;
  if (!taskId && !driverId) {
    return res
      .status(500)
      .json({ error: "Missing taskId & driverId - assignDriverToTask" });
  }
  if (!taskId && driverId) {
    for (const [key, value] of connections.entries()) {
      if (value === driverId) {
        connections.delete(key);
      }
    }
  }
  if (!driverId && taskId) {
    connections.delete(taskId);
  }
  if (driverId && taskId) {
    connections.set(taskId, driverId);
  }
  const json = JSON.stringify(Object.fromEntries(connections));
  res.send(json);
};
