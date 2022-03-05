const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
          type: String,
          trim: true,
          unique: true,
          required: 'ERROR: Username is required',
        },
        email: {
          type: String,
          unique: true,
          required: 'ERROR: Email is required',
          match: [/.+@.+\..+/, 'ERROR: Please enter a valid email address']
        },
        password: {
          type: String,
          trim: true,
          required: 'ERROR: Password is required',
          validate: [({ length }) => length >= 6, 'ERROR: Password must be at least 6 characters']
        },
        date_created: {
          type: Date,
          default: Date.now
        },
        date_login: {
          type: Date,
          default: Date.now
        }
      },
      {
        toJSON: {
          virtuals: true,
        },
        id: false
      }
);


const User = model('User', UserSchema);

module.exports = User;
