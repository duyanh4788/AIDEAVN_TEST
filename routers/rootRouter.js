const { Router } = require("express");
const { studentsRouter } = require("./students.router");
const { teachersRouter } = require("./teachers.router");

const rootRouter = Router();

rootRouter.use("/students", studentsRouter);
rootRouter.use("/teachers", teachersRouter);

module.exports = {
  rootRouter,
};
