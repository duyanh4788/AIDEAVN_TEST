"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const studentList = [...Array(3)].map((_, index) => {
      return {
        id: index + 1,
        fullName: `Student Test ${index}`,
        birthDay: new Date(),
        className: `Class ${index}`,
        classLevel: Math.floor(Math.random() * 3) + 1,
        schoolName: "Education Test",
        schoolYear: "01/2022",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    return queryInterface.bulkInsert("students", studentList);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("students", null, {});
  },
};
