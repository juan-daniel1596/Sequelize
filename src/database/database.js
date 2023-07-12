import Sequelize from "sequelize";
export const sequelize = new Sequelize(
  "projectsdb",
  "postgres",
  "admin123456",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
