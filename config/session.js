//-- Accesss to .env variables
require('dotenv').config();
//-- Sessions
const session = require('express-session');
//-- for creation session records
const sessionStore = require('connect-session-sequelize')(session.Store);

//-- session env
const sess = {
    // TODO:: REMOVE THIS ASAP!
    secret: process.env.SECRET_TECH_BLOG,
    cookie: {
      // Session expires after 10 mins of inactivity.
      expires: 600000
    },
    
    // Forces the session to be saved
    // back to the session store
    resave: true,
    // Forces a session that is "uninitialized"
    // to be saved to the store
    saveUninitialized: false,
    store: new sessionStore({ db: sequelize  })
  };