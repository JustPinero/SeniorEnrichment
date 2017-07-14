const Sequelize = require('sequelize');
const db = require('../index');


const campus= db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate :{
      notEmpty: true
    }
  },
  photo: {
    type: Sequelize.STRING
  }
});

module.exports = campus;
