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
    "host": "localhost",
    "port": 5432,
    "url": "",
    "database": "cusurdb",
    "password": "",
    "name": "cusurdb",
    "user": "crystalstream",
    "connector": "postgresql"
  }
}