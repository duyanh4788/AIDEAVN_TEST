"use strict";

const { TeachSubjects, StudyPointStyle } = require("../helper/enum");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const studyPointList = [...Array(20)].map((_, index) => {
      return {
        student_id: Math.floor(Math.random() * 3) + 1,
        teacher_id: Math.floor(Math.random() * 5) + 1,
        testMarks: Math.random() * (9.5 - 1) + 1,
        subjects:
          Object.values(TeachSubjects)[
            Math.floor(Math.random() * Object.values(TeachSubjects).length)
          ],
        typeTestMark:
          Object.values(StudyPointStyle)[
            Math.floor(Math.random() * Object.values(StudyPointStyle).length)
          ],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    return queryInterface.bulkInsert("study_points", studyPointList);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("study_points", null, {});
  },
};
