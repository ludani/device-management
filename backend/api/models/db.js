const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('device_management', 'lucas', '12345', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
	console.log("Conection success!");
}).catch(function(err){
	console.log("Erro: Conection no success!");	
});

module.exports = sequelize;