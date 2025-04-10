import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { sequelize } from "../config/dbConfig.js";

export const loadModels = async () => {
  const models = {};
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const modelDir = path.join(__dirname, "./");

  try {
    const files = fs.readdirSync(modelDir);

    for (const file of files) {
      if (file.endsWith(".js")) {
        // Convert the file path to a proper file:// URL
        const fileUrl = `file://${path.join(modelDir, file).replace(/\\/g, "/")}`;
        const module = await import(fileUrl);
        const model = module.default;

        if (model && typeof model.init === "function") {
          if (!sequelize.models[model.name]) {
            models[model.name] = model;
          }
        }
      }
    }

    return models;
  } catch (error) {
    console.error("Error loading models:", error);
    throw error;
  }
};
