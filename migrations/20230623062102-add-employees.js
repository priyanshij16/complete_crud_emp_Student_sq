'use strict';
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try{

      await queryInterface.createTable('employee', {
        employeeId: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
          unique: true
        },
        employeeName: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        contactNumber: {
          type: Sequelize.STRING,
          allowNull: false
        },
        gender: {
          type: Sequelize.STRING,
          allowNull: false
        },
        dateOfBirth:{
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          allowNull: false
        },
  
        createdBy: {
          type: Sequelize.UUID,
          allowNull: false
        },
  
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: true
        },
  
        updatedBy: {
          type: Sequelize.UUID,
          allowNull: true
        },
  
        deletedAt: {
          type: Sequelize.DATE,
          allowNull: true
        },
  
        deletedBy: {
          type: Sequelize.UUID,
          allowNull:true
        }
      });
      console.log("Migration run successsfully of employee");
    }
    catch(err){
      console.log("Error in employeee migration");
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('employee')
  }
};