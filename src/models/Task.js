import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Task = sequelize.define("Task",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name:{
    type: DataTypes.STRING
    }, 
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    



},{
    timesTamps: false
})