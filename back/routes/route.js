const express = require("express");
const router = express.Router();
const User1 = require("../models/user1");

// Header fields metadata
const fields = [
  { label: "NAME", type: "text", readonly: false },
  { label: "NUMBER", type: "number", readonly: false },
  { label: "DESCRIPTION", type: "textarea", readonly: false },
  { label: "STATUS", type: "checkbox", readonly: false },
];

// Get header fields
router.get("/headers", (req, res) => {
  res.json({ headers: fields });
});

// Fetch all data from the table
router.get("/data", async (req, res) => {
  try {
    const allData = await User1.findAll();
    res.json({ data: allData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Submit a new entry
router.post("/submit", async (req, res) => {
  const { name, number, description, status } = req.body;
  try {
    const newEntry = await User1.create({ name, number, description, status });
    
    res.json({ data: newEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Update status of a record
router.put("/updateStatus/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Status field is required." });
  }

  try {
    const record = await User1.findByPk(id);
    if (!record) {
      return res.status(404).json({ message: "Record not found." });
    }
    record.status = status;
    await record.save();
    res.json({ data: record });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
