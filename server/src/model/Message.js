import { DataTypes, Model } from "@sequelize/core";
import { sequelize } from "../config/dbConfig.js";
import { v4 as uuidv4 } from "uuid";
import Boxchat from "./BoxChat.js";
import User from "./User.js";

class Message extends Model {}

Message.init(
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
      type: DataTypes.BOOLEAN,
      defaultValue: true,
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

Boxchat.hasMany(Message);
User.hasMany(Message);


export default Message;