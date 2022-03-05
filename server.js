const express = require('express');
const {mongoose, sequelize} = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use this to log mongo queries being executed
mongoose.set('debug', true);


app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on http://127.0.0.1:${PORT}`));
