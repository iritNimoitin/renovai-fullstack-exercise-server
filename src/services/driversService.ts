import fs from 'fs/promises';
import path from 'path';

const jsonFilePath = path.join(__dirname, '..', 'jsonFiles', 'drivers.json');

export const getAllDrivers = async () => {
  try {
    const data = await fs.readFile(jsonFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error('Error reading driver.JSON file');
  }
};

export const deleteDriver = async (driverId: string) => {
  try {
    const allDrivers = await getAllDrivers();
    const updatedDrivers = allDrivers.filter((driver: { id: string; }) => driver.id !== driverId);
    await fs.writeFile(jsonFilePath, JSON.stringify(updatedDrivers, null, 2));
    return updatedDrivers;
  } catch (error) {
    throw new Error('Error deleting driver');
  }
};