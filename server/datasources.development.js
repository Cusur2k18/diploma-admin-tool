require('dotenv').config();

module.exports = {
  udg: {
    "url": "",
    "name": "udg",
    "wsdl": process.env.UDG_SOAP_SERVICE_URL,
    "remotingEnabled": true,
    "connector": "soap"
  }
}