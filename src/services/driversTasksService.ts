import fs from 'fs/promises';
import path from 'path';

const jsonFilePath = path.join(__dirname, '..', 'jsonFiles', 'driversTasks.json');

export const getAllDriversTasks = async () => {
  try {
    const data = await fs.readFile(jsonFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error('Error reading driversTasks.JSON file');
  }
};

export const writeAllDriversTasks = async (data:any) => {
  try {
    const jsonData = JSON.stringify(data, null, 2); 
    await fs.writeFile(jsonFilePath, jsonData, 'utf8');
  } catch (error) {
    throw new Error('Error writing to driversTasks.JSON file');
  }
};
