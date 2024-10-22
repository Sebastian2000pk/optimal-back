const { DataTypes } = require("sequelize");
import sequelize from "@/database/sequelize";
import { dbConfig } from "@/database/dbConfig";

export const DroneModel = sequelize.define(
  "drone",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "ready",
    },
    deliveryObject: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  dbConfig
);
