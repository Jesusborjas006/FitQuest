const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// GET all users
router.get("/", getUsers);

// GET single user
router.get("/:id", getUser);

// POST a new user
router.post("/", createUser);

// DELETE user
router.delete("/:id", deleteUser);

module.exports = router;