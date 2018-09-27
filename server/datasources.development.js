require('dotenv').config();

module.exports = {
  udg: {
    "url": "",
    "name": "udg",
    "wsdl": process.env.UDG_SOAP_SERVICE_URL,
    "remotingEnabled": true,
    "connector": "soap"
  },
  cusurdb: {
    "host": process.env.DB_HOST,
    "port": 5432,
    "url": process.env.DATABASE_URL,
    "database": process.env.DB_NAME,
    "password": process.env.DB_PASS,
    "name": "cusurdb",
    "user": process.env.DB_USER,
    "connector": "postgresql"
  }
}