const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
          type: String,
          trim: true,
          required: 'Username is required',
        },
        firstName: {
            type: String,
            trim: true,
            required: 'First Name is Required'
          },
      
          lastName: {
            type: String,
            trim: true,
            required: 'Last Name is Required'
          },
      
          password: {
            type: String,
            trim: true,
            required: 'Password is Required',
            validate: [({ length }) => length >= 6, 'Password must be at least 6 characters.']
          },
      
          email: {
            type: String,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
          },
        userCreated: {
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
