const { sequelize } = require("../models/index");

const updateScroceService = async (body) => {
  try {
    const { studentId, studyId, testMarsk, teacherId } = body;
    const queryGetById = `SELECT student_id, teacher_id FROM study_points WHERE id = ${studyId}`;
    const result = await sequelize.query(queryGetById, {
      type: sequelize.QueryTypes.SELECT,
    });
    if (
      !result ||
      result[0].teacher_id !== teacherId ||
      result[0].student_id !== studentId
    ) {
      throw Error("study not availible");
    }
    const update = `
      UPDATE study_points
      SET testMarks = ${testMarsk}
      WHERE id = ${studyId};
    `;
    await sequelize.query(update, {
      type: sequelize.QueryTypes.UPDATE,
    });
    return result;
  } catch (error) {
    throw Error("study not availible");
  }
};

module.exports = {
  updateScroceService,
};
