"use strict";

var Sequelize = require('sequelize');

var _require = require('../database/database'),
    sequelize = _require.sequelize;

var Task = require('./Task');

var Project = sequelize.define('projects', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  priority: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.STRING
  },
  deliverydate: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});
module.exports = Project;
Project.hasMany(Task, {
  foreinkey: 'projectid',
  sourceKey: 'id'
});
Task.belongsTo(Project, {
  foreinkey: 'projectid',
  targetId: 'id'
});
module.exports = Project;