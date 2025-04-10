import { DataTypes, Model } from "@sequelize/core";
import { sequelize } from "../config/dbConfig.js";
import { v4 as uuidv4 } from "uuid";
import Message from "./Message.js";

class Asset extends Model {}

Asset.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuidv4,
    },
    content: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM(['img', 'vid', 'file', 'others']),
      defaultValue: 'others',
      allowNull: false,
    },
    // assets: {
       
    // },
  },
  {
    sequelize,
    timestamps: true,
  }
);

Message.hasMany(Asset);
Asset.belongsTo(Message);

export default Asset;