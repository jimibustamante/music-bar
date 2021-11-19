const { Sequelize } = require('sequelize')
const config = require('./../config/config.js')
const setupModels = require('./../db/models/index.js')

const { dbUser, dbPass, dbPort, dbHost, dbName } = config

const URI = `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
console.log({ URI })

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
})

setupModels(sequelize)

export default sequelize
