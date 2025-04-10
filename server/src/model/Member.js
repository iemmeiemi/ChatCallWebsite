import { DataTypes, Model } from "@sequelize/core";
import { sequelize } from "../config/dbConfig.js";
import { v4 as uuidv4 } from 'uuid';
import Boxchat from "./BoxChat.js";
import User from "./User.js";

class Member extends Model {}

Member.init(
  {
    nickname: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
  },
);

User.belongsToMany(Boxchat, { through: Member });
Boxchat.belongsToMany(User, { through: Member });

export default Member;