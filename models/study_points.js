"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudyPoints extends Model {
    static associate(models) {
      this.belongsTo(models.Students, {
        foreignKey: "student_id",
      });
      this.belongsTo(models.Teachers, {
        foreignKey: "teacher_id",
      });
    }
  }
  StudyPoints.init(
    {
      student_id: DataTypes.INTEGER,
      teacher_id: DataTypes.INTEGER,
      subjects: DataTypes.STRING,
      testMarks: DataTypes.INTEGER,
      typeTestMark: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "StudyPoints",
    }
  );
  return StudyPoints;
};
