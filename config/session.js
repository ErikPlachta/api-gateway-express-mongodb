//-- Sessions
const session = require('express-session');
//-- for creation session records
const sessionStore = require('connect-session-sequelize')(session.Store);