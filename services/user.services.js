const { models } = require('sequelize')
const { User } = models

class UserService {
  constructor() {}

  async getAll() {
    return await User.findAll()
  }

  async getById(id) {
    return await User.findOne({ where: { id } })
  }

  async create(data) {
    return await User.create(data)
  }

  async update(id, data) {
    return await User.update(data, { where: { id } })
  }
}

module.exports = UserService
