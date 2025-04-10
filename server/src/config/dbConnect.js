import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

import { sequelize } from "../config/dbConfig.js";
import { loadModels } from "../model/index.js";

export const connectDB = async () => {
  try {
    await createDatabaseIfNotExists();
    await sequelize.authenticate();

    // Lưu kết quả của loadModels
    const models = await loadModels();

    // Đồng bộ tất cả models với database
    await sequelize.sync({ force: true });

    console.log("All models were synchronized successfully.");
    console.log("Connection has been established successfully.");

    // Trả về models để có thể sử dụng ở nơi khác nếu cần
    return models;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error; // Nên throw error để xử lý ở cấp cao hơn
  }
};

async function createDatabaseIfNotExists() {
  const dbName = process.env.DB_DATABASE || "chat_module_practical";
  let connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
    console.log(`✅ Database "${dbName}" is ready.`);
  } catch (error) {
    console.error("Error creating database:", error);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
