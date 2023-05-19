"use strict";

const { Positions, TeachSubjects } = require("../helper/enum");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("teachers", {
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
      positions: {
        type: Sequelize.ENUM(
          Positions.PRINCIPAL,
          Positions.TEACHER,
          Positions.STAFF
        ),
        allowNull: false,
      },
      teachSubjects: {
        type: Sequelize.ENUM(
          TeachSubjects.ENGLISH,
          TeachSubjects.MATH,
          TeachSubjects.HISTORY,
          TeachSubjects.LITERATURE
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
    await queryInterface.dropTable("teachers");
  },
};
