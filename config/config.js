require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  dbName: process.env.PSQL_DB || 'postgres',
  dbUser: process.env.PSQL_USER || 'postgres',
  dbPass: process.env.PSQL_PASSWORD || '',
  dbPort: process.env.PSQL_PORT || 5432,
  dbHost: process.env.PSQL_HOST || 'localhost',
}

module.exports = config
