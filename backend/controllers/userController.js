const User = require("../models/UserModel");
const mongoose = require("mongoose");
const { use } = require("../routes/users");

// GET all users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ id: 1 });

  res.status(200).json(users);
};

// GET single user
const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  res.status(200).json(user);
};

// POST new user
const createUser = async (req, res) => {
  const { id, name, image } = req.body;

  try {
    const user = await User.create({ id, name, image });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a user
const deleteUser = async(req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findOneAndDelete({_id: id})

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  res.status(200).json(user)
}

module.exports = { getUsers, getUser, createUser, deleteUser };
