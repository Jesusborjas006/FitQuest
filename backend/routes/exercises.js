const express = require("express");
const {
  getExercises,
  getExercise,
  createExercise,
} = require("../controllers/exerciseController");

const router = express.Router();

// GET all exercises
router.get("/", getExercises);

// GET single exercise
router.get("/:id", getExercise);

// POST a new exercise
router.post("/", createExercise);

module.exports = router;
