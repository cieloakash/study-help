import mongoose from "mongoose";
const createDoneTask = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  points: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const CreateEverydayDoneTask = mongoose.model("CreateEverydayDoneTask",createDoneTask)
export default CreateEverydayDoneTask