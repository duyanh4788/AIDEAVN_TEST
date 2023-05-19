"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teachers extends Model {
    static associate(models) {
      this.hasMany(models.StudyPoints, {
        foreignKey: "teacher_id",
      });
    }
  }
  Teachers.init(
    {
      fullName: DataTypes.STRING,
      birthDay: DataTypes.DATE,
      positions: DataTypes.STRING,
      teachSubjects: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Teachers",
    }
  );
  return Teachers;
};
