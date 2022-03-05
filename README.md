# API Gateway for a Social Platform - Concept App

## Dependencies

- **Utility**
  - [dotenv](#dotenv)
    - Allow environment variables
  - [moment](#moment)
    - Used by helper functions for date-time manipulation
  - **Security**
    - [express-session](#express-session)
      - Allow secure session cookies with...
    - [connect-session-sequelize](#connect-session-sequelize)
      - Allow secure session cookies with...
    - [bcrypt](#bcrypt)
    - Encryption user creds
  - [Google API](https://www.npmjs.com/package/googleapis)  
    - User authentication
- **Server**
  - [express](#express)
    - Running the server on Heroku
  - [express-handlebars](#express-handlebars)
    - Controller managing the front-end
- Database
  - [Mongoose](https://www.npmjs.com/package/mongoose)
  - [mysql2](#mysql2)
    - MySQL / JawsDB
  - [sequelize](#sequelize)
    - ORM for MySQL / JawsDB
