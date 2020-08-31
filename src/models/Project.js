import Sequalize, { Sequelize, INTEGER } from 'sequelize';
import { sequelize } from '../database/database';
import Task from './Task';

const Project = sequelize.define('projects',{
    id:{
        type: Sequelize.INTEGER,
        primarykey: true
    },
    name: {
        type: Sequelize.TEXT
    }, 
    priority: {
        type: INTEGER.TEXT
    }, 
    description: {
        type: Sequelize.TEXT
    }, 
    deliverydate: {
        type: Sequelize.DATE
    },
    
}, {
    timestamps: false
}); 

Project.hasMany(Task,{foreingKey: 'projectId', sourceKey: 'id'});
Task.belongsTo(Project, {foreingKey: 'projectId', sourceKey: 'id'});

export default Project;