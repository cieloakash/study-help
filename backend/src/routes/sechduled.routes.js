import express from "express";
import { getallSchedule } from "../controller/schedule.controller.js";


const schedule = express.Router();
schedule.get("/schedule",getallSchedule);

export default schedule;
