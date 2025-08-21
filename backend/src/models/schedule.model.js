import mongoose from 'mongoose';

const ScheduleSchema = new mongoose.Schema({
  startdate: String,
  enddate: String,
  topic: String,
  cloudinary_url: String
});

export default mongoose.model('Schedule', ScheduleSchema);
