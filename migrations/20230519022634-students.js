"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birthDay: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      className: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      classLevel: {
        type: Sequelize.ENUM("1", "2", "3"),
        allowNull: false,
      },
      schoolName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      schoolYear: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("students");
  },
};
