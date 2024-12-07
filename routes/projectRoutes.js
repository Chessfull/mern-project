const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

// ▼ GET: Route to list all projects ▼
router.get("/", projectController.getAllProjects);

// ▼ GET: Route to show add project page ▼
router.get("/add", projectController.getAddProjectPage);

// ▼ POST: Route to handle project creation ▼
router.post("/add", projectController.addProject);

// ▼ POST: Route to handle project deletion ▼
router.post("/delete/:id", projectController.deleteProject);

module.exports = router;
