const {
  findStudentByIdService,
  findStudentBestService,
  findListScoresByStudentId,
} = require("../services/students.service");

const findStudentById = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({ msg: "params not availible" });
    }
    const student = await findStudentByIdService(req.params.id);
    if (!student) {
      return res.status(400).send({ msg: "student not found" });
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};

const findStudentBest = async (req, res) => {
  try {
    const students = await findStudentBestService();
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};

const findListScoresById = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({ msg: "params not availible" });
    }
    const student = await findListScoresByStudentId(req.params.id);
    if (!student) {
      return res.status(400).send({ msg: "student not found" });
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  findStudentById,
  findStudentBest,
  findListScoresById,
};
