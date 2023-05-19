const { Router } = require("express");
const { updateScores } = require("../controllers/teachers.controller");

const teachersRouter = Router();

teachersRouter.post("/update-scores", updateScores);

module.exports = {
  teachersRouter,
};
