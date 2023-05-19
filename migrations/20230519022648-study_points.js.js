"use strict";

const { StudyPointStyle, TeachSubjects } = require("../helper/enum");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("study_points", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subjects: {
        type: Sequelize.ENUM(
          TeachSubjects.ENGLISH,
          TeachSubjects.MATH,
          TeachSubjects.HISTORY,
          TeachSubjects.LITERATURE
        ),
        allowNull: false,
      },
      testMarks: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      typeTestMark: {
        type: Sequelize.ENUM(
          StudyPointStyle.ORAL_TEST_SCORES,
          StudyPointStyle.ONE_PERIOD_TEST_SCORES,
          StudyPointStyle.SEMESTER_GRADES_TEST_SCORES,
          StudyPointStyle.MULTIPLE_CHOICE_TEST_SCORES
        ),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("study_points");
  },
};
