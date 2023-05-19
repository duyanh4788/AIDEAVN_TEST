"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    static associate(models) {
      this.hasMany(models.StudyPoints, {
        foreignKey: "student_id",
      });
    }
  }
  Students.init(
    {
      fullName: DataTypes.STRING,
      birthDay: DataTypes.DATE,
      className: DataTypes.STRING,
      classLevel: DataTypes.STRING,
      schoolName: DataTypes.STRING,
      schoolYear: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Students",
    }
  );
  return Students;
};
