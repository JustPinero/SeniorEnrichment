'use strict';
const Students = require('./students');
const Campuses = require('./campuses');

Students.belongsTo(Campuses);
Campuses.hasMany(Students, {as: "Students"});

module.exports = {Students, Campuses};
