const config = require('../config/config.js')

const { dbUser, dbPass, dbPort, dbHost, dbName } = config

const URI = `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  },
}
