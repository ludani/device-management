'use strict';
 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('devices', {
      
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      
      color: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      
      partNumber: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      
      category_id: {
        type: Sequelize.STRING(11),
        allowNull: false
      },

      category_fk: {
        type: Sequelize.INTEGER,
        references: {
            model: 'devices',
            key: 'category_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
      
    })
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('devices');
  }
}