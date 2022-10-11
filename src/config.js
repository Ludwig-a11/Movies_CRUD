//const dotenv = require('donenv')
//dontenv.config()

//? habilita acceder a las variables de entorno '.env'
require('dotenv').config();

const config = {
  port: process.env.PORT || 9000,
  nodeEnv: process.env.NODE_ENV || 'development',
  db: {
    port: process.env.DB_PORT || 3000,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'b0u3',
    host: process.env.DB_HOST || 'localhost',
    name: process.env.DB_NAME
  }
}

module.exports = config