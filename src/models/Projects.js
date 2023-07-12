import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Task } from './Task.js';

export const Projects = sequelize.define("Projects", {
 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      priority: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
    }
  );
Projects.hasMany(Task, {
    foreinkey: "projectId",
    sourceKey: "id"
})
Task.belongsTo(Projects, {
    foreinkey: "projectId", 
    targetId: "id"

})