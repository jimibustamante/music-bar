'use strict'

const { UserSchema, USER_TABLE } = require('../models/user.model')
const { BarSchema, BAR_TABLE } = require('../models/bar.model')
module.exports = {
  up: async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(BAR_TABLE, BarSchema)
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(USER_TABLE)
    await queryInterface.dropTable(BAR_TABLE)
  },
}
