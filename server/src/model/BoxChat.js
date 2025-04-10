import { DataTypes, Model } from "@sequelize/core";
import { sequelize } from "../config/dbConfig.js";
import { v4 as uuidv4 } from "uuid";

class Boxchat extends Model {}

Boxchat.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuidv4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM(['solo', 'duo', 'group']), //solo w/ ai, duo, group
      defaultValue: 'duo',
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);


export default Boxchat;