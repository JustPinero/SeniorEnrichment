const Sequelize = require('sequelize');
const db = require('../index');

const student= db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate :{
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate :{
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    }
}, {
    getterMethods: {
      fullName: function(){
        return (this.firstName + " "+ this.lastName);
      }
    }
});

module.exports = student;
