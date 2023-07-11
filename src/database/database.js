import Sequelize from "sequelize";
export const sequelize = new Sequelize(
  "Projectsdb",
  "postgres",
  "admin123456",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
