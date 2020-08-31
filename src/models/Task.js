import Sequalize, { Sequelize, INTEGER } from 'sequelize';
import { sequelize } from '../database/database';

const Task = sequelize.define('task',{
    id: {
        type: Sequelize.INTEGER,
        primarykey: true
    },
    name: {
        type: Sequelize.TEXT
    }, 
    done:{
        type: Sequelize.BOOLEAN
    },
    projectId:{
        type: Sequelize.INTEGER
    }
},{
    timestamps: true
});

export default Task;