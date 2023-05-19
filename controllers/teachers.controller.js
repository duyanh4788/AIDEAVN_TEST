const { updateScroceService } = require("../services/teachers.service");

const updateScores = async (req, res) => {
  try {
    // I has get value teacherId because i doing authentication
    const { studentId, studyId, testMarsk, teacherId } = req.body;
    if (
      !validate(studentId) ||
      !validate(studyId) ||
      !validate(testMarsk) ||
      !validate(teacherId)
    ) {
      return res.status(400).send({ msg: "payload not availible" });
    }
    await updateScroceService(req.body);
    res.status(200).send({ msg: "update sucessfully" });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

const validate = (value) => {
  if (!value || value === "" || value === 0) return false;
  return true;
};

module.exports = {
  updateScores,
};
