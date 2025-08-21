import CreateEverydayDoneTask from "../models/create.model.js";

export const task = async (req, res) => {
  try {
    const { topic, desc, points, date } = req.body;
    if (!Array.isArray(points)) {
      return res
        .status(400)
        .json({ success: false, message: "points must be an array" });
    }

    const new_task = new CreateEverydayDoneTask({
      topic,
      desc,
      points,
      date,
    });

    await new_task.save();
    return res.status(201).json({
      success: true,
      message: "Task created successfully.",
      data: new_task,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTask = async (req, res) => {
  try {
    const tasks = await CreateEverydayDoneTask.find();
    return res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
