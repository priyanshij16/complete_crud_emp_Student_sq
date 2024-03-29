'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('address', {
        addressId: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
          unique: true
        },
        employeeId: {
          type: Sequelize.UUID,
          references: {
            model: 'employee',
            key: 'employeeId'
          },
          onDelete: 'CASCADE'
        },
        state: {
          type: Sequelize.STRING,
          allowNull: false
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false
        },
        pincode: {
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
          allowNull: true
        }
      })
    console.log("Migration run successfully of address");
  }
    catch(err) {
    console.log("Migration failed of address", err);
  }
},

  async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('address')
}
};