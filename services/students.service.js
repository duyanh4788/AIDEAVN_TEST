const { sequelize } = require("../models/index");

const findStudentByIdService = async (id) => {
  try {
    const query = `SELECT students.id, students.fullName, students.classLevel, students.className,students.schoolName,students.schoolYear, AVG(study_points.testMarks) AS averageMarks FROM educations.students JOIN educations.study_points ON study_points.student_id = students.id WHERE students.id = ${id}`;
    const result = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
    if (!result || !result[0].id) return;
    return result[0];
  } catch (error) {
    return;
  }
};

const findStudentBestService = async (id) => {
  try {
    const query = `
      SELECT students.id, students.fullName, students.classLevel, AVG(study_points.testMarks) AS averageMark
      FROM educations.students
      JOIN educations.study_points ON students.id = study_points.student_id
      WHERE study_points.subjects IN ('ENGLISH', 'MATH', 'LITERATURE') AND study_points.testMarks >= 8.0
      GROUP BY students.id, students.fullName, students.classLevel
      HAVING MIN(study_points.testMarks) >= 6.5 AND AVG(study_points.testMarks) >= 8.0
    `;
    const result = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
    if (!result) return;
    return result;
  } catch (error) {
    return;
  }
};

const findListScoresByStudentId = async (id) => {
  try {
    const query = `
    SELECT students.id, students.fullName as studentName, students.classLevel, students.className , study_points.subjects, study_points.testMarks, teachers.fullName as teacherName
    FROM students
    JOIN study_points ON students.id = study_points.student_id
    JOIN teachers ON teachers.id = study_points.teacher_id
    WHERE students.id = ${id};
    `;
    const result = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
    if (!result) return;
    return result;
  } catch (error) {
    return;
  }
};

module.exports = {
  findStudentByIdService,
  findStudentBestService,
  findListScoresByStudentId,
};
