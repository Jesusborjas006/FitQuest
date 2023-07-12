const Exercise = require("../models/ExerciseModel");
const mongoose = require("mongoose");
const { use } = require("../routes/exercises");

// GET all exercises
const getExercises = async (req, res) => {
  const exercises = await Exercise.find({}).sort({ id: 1 });

  res.status(200).json(exercises);
};

// Get single exercise
const getExercise = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such exercise" });
  }

  const exercise = await Exercise.findById(id);

  if (!exercise) {
    return res.status(404).json({ error: "No such exercise" });
  }

  res.status(200).json(exercise);
};

// POST new exercise
const createExercise = async (req, res) => {
  const { id, name, image, instructions, primaryTarget, secondaryTarget } =
    req.body;

  try {
    const exercise = await Exercise.create({
      id,
      name,
      image,
      instructions,
      primaryTarget,
      secondaryTarget,
    });
    res.status(201).json(exercise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getExercises,
  getExercise,
  createExercise,
};
