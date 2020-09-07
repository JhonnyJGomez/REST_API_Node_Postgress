"use strict";

var Sequelize = require('sequelize');

var _require = require('../database/database'),
    sequelize = _require.sequelize;

var Task = sequelize.define('task', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  done: {
    type: Sequelize.BOOLEAN
  },
  projectid: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});
module.exports = Task;