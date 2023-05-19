"use strict";

const { Positions, TeachSubjects } = require("../helper/enum");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const teacherList = [...Array(5)].map((_, index) => {
      return {
        id: index + 1,
        fullName: `Teacher Test ${index}`,
        birthDay: new Date(),
        positions:
          Object.values(Positions)[
            Math.floor(Math.random() * Object.values(Positions).length)
          ],
        teachSubjects:
          Object.values(TeachSubjects)[
            Math.floor(Math.random() * Object.values(TeachSubjects).length)
          ],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    return queryInterface.bulkInsert("teachers", teacherList);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("teachers", null, {});
  },
};
