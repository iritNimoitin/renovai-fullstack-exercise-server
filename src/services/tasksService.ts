import fs from "fs/promises";
import path from "path";

const jsonFilePath = path.join(__dirname, "..", "jsonFiles", "tasks.json");

export const getAllTasks = async () => {
  try {
    const data = await fs.readFile(jsonFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Error reading tasks.JSON file");
  }
};
