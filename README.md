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

Then create an `.env` file on the root directory and fill it with the following:

```
UDG_SOAP_SERVICE_URL=<WSDL_UDG>
```

after that you can run the migrations and the seeds to create and populate the database:

```bash
npm run migrate
```

and

```bash
npm run seed:roles && npm run seed:admin
```

Since we need to read environmental variables, we use [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) to start the server:

```bash
heroku local
```

That should start a dev server on `localhost:5000`.


## ERD

![ERD](http://res.cloudinary.com/crystalstream/image/upload/v1536509401/ECE-ERD.png)

## Notes

* After inster on `Managers`:
  - Since we are unsing some kinde of multitenant database, we need to have a scope, that's why after each insert of manager, the system
    automatically creates an account for that manager.
* Replace `login` remote method on `Student`:
  - Student model: For the studen model we change the `login` method and create a `signin` remote method instead **USE THAT METHOD INSTEAD OF LOGIN**.
    The remote method will connect with the SOAP service of UDG and validate the credentials, if everything goes correctly, the system replicates the user info
    on our database, and then automatically does the login, so it's really important use that remote method, otherwise, the database will never be populate.