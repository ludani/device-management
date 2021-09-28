const Sequelize = require('sequelize');
const db = require('./db');

const Category = db.define('categories',{

	id:{
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true, 
	},

	name: {
		type: Sequelize.STRING,
		allowNull: false, 
	}

});

// create table
Category.sync();

module.exports = Category;
