const Sequelize = require('sequelize');
const db = require('./db');

const Devices = db.define('devices',{

	id:{
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true, 
	},
	
	color: {
		type: Sequelize.STRING,
		allowNull: false, 
	},
	
	partNumber: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	
	cartegory_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
	}
});

// create table
Devices.sync();

module.exports = Devices;
