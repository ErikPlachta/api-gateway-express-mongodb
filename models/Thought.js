const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {
        text: {
          type: String,
          minlength: 1,
          maxlength: 280,
          required: 'ERROR: Text must be between 1 - 280 characters',
        },
        date_created: {
          type: Date,
          default: Date.now,
          get: date_creted_value => dateFormat(date_creted_value)
        },
        date_login: {
          type: Date,
          default: Date.now
        },
        //-- related to other schemas
        username: {
            type: String,
            required: true,
            ref: 'User',
            field: 'username'
        }
      },
      {
        toJSON: {
          virtuals: true,
        },
        id: false
      }
);

//-- virtual getting total friends
// ThoughtSchema.virtual('friendCount').get(function() {
//   return this.friends.reduce((total, friend) => total + 1, 0);
// });


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
