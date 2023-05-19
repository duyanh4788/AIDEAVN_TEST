const { Router } = require("express");
const {
  findStudentById,
  findStudentBest,
  findListScoresById,
} = require("../controllers/students.controller");

const studentsRouter = Router();

studentsRouter.get("/find-student-byid/:id", findStudentById);
studentsRouter.get("/find-student-best", findStudentBest);
studentsRouter.get("/find-list-scores/:id", findListScoresById);

module.exports = {
  studentsRouter,
};
