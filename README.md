# DAT CUsur (Diploma Admin Tool)

> This repo has the API for the ECE plataform

## Installation

First clone the repo:

```bash
git clone
```

and install all the dependencies (run this under the root directory):

```bash
npm install
```

Then create a `datasource.local.json` or `datasource.local.js` file under `server/` with the following:


```javascript
{
  "db": {
    "name": "db",
    "connector": "memory"
  },
  "udg": {
    "url": "",
    "name": "udg",
    "wsdl": "<WSDL_UDG>",
    "remotingEnabled": true,
    "connector": "soap"
  },
  "cusurdb": {
    "host": "<db_host>",
    "port": "5432",
    "url": "<db_url>",
    "database": "<db_name>",
    "password": "<db_pass>",
    "name": "cusurdb",
    "user": "<db_user>",
    "connector": "postgresql"
  }
}
```

after that you can run the migrations to create the database:

```bash
npm run migrate
```

## Notes

* After inster on `Managers`:
  - Since we are unsing some kinde of multitenant database, we need to have a scope, that's why after each insert of manager, the system
    automatically creates an account for that manager.
* Replace `login` remote method on `Student`:
  - Student model: For the studen model we change the `login` method and create a `signin` remote method instead **USE THAT METHOD INSTEAD OF LOGIN**.
    The remote method will connect with the SOAP service of UDG and validate the credentials, if everything goes correctly, the system replicates the user info
    on our database, and then automatically does the login, so it's really important use that remote method, otherwise, the database will never be populate.