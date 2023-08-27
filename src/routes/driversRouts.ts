import express from "express";
import { getDrivers } from "../controllers/driversController";

const router = express.Router();

router.get("/getDrivers", getDrivers);

export default router;
