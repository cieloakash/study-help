import express from "express";
import { getTask, task } from "../controller/donetask.controller.js";

const everyDayTaskDone = express.Router()

everyDayTaskDone.post('/create-donetask',task)
everyDayTaskDone.get('/donetasks',getTask)


export default everyDayTaskDone