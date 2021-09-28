'use strict';
 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      
      category: {
        type: Sequelize.STRING(50),
        allowNull: false
      }
      
    })
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  }
}