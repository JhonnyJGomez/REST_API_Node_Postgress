import Sequelize, { DataTypes } from 'sequelize';
import { sequelize } from '../database/database';

const Task = sequelize.define('task',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT
    }, 
    done:{
        type: DataTypes.BOOLEAN
    },
    projectid:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: true
});

export default Task;