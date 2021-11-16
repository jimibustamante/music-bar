const { User, UserSchema } = require('./user.model.js')
const { Bar, BarSchema } = require('./bar.model.js')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Bar.init(BarSchema, Bar.config(sequelize))
}

module.exports = setupModels
