const express = require("express")

const router = express.Router()

// GET all users
router.get("/", (req, res) => {
  res.json({mssg: "All users"})
})

// GET single user
router.get("/:id", (req, res) => {
  res.json({mssg: "Get single user"})
})

module.exports = router