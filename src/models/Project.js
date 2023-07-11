import { DataTypes } from 'sequelize'
import {sequelize} from '../database/database.js'
import { Task } from './Task.js';

export const Project = sequelize.define('Projects', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoincrement: true
},
name:{
    type: DataTypes.STRING

},
priority:{
    type: DataTypes.INTEGER
},
descripcion :{
    type: DataTypes.STRING
}
},{
    timestamps: true
});

Project.hasMany(Task,{
    foreignKey: 'projectid',
    sourceKey: 'id'
})
Task.belongsTo(Project,{
    foreignKey: 'projectid',
    targetKey: 'id'

})