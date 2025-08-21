import express from "express";
import mongoose from "mongoose";
export const getallSchedule = async (req, res) => {
  try {
    const db = mongoose.connection;
    const collection = db.collection("schedule");
    console.log("DB Name:", db.name);
    console.log("Collections:", await db.listCollections().toArray());

    // Find all documents and convert to array
    const data = await collection.find().toArray();

    res.status(200).json({
      success: true,
      count: data.length,
      data: data,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch schedules", details: error.message });
  }
};
