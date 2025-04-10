import { DataTypes, Model } from "@sequelize/core";
import { sequelize } from "../config/dbConfig.js";
import { v4 as uuidv4 } from "uuid";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuidv4,
    },
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize,
    //modelName: 'User',
    timestamps: true,
  }
);


export default User;
