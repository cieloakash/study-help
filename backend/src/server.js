import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./lib/db.js";
import everyDayTaskDone from "./routes/everydaytaskdone.routes.js";
import schedule from "./routes/sechduled.routes.js";

const server = express();
dotenv.config({ path: [".env.local", ".env"] });
server.use(express.json());

server.use("/api/task", everyDayTaskDone);
server.use('/api/task',everyDayTaskDone)
server.use('/api/task',schedule)

server.listen(process.env.PORT, () => {
  connectDb();
});
