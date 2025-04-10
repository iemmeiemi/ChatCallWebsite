import { Sequelize, importModels } from "@sequelize/core";
import { MySqlDialect } from "@sequelize/mysql";

import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 3306,
  // models: await importModels(__dirname + '/../server/src/model*.js'),
});
