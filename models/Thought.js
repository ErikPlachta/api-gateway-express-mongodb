//-- IMPORTS
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


//-- SCHEMAS

const ReactionSceham = new Schema(
    //-- A response to a thought created by a user
    {
        reactionId: {
            type: Schema.Types.ObjectId, 
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
            required: 'ERROR: Text must be between 1 - 280 characters',
        },
        username: {
            type: String,
            required: true
        },
        date_created: {
            type: Date,
            default: Date.now,
            get: date_creted_value => dateFormat(date_creted_value)
        },
    },
    { toJSON: { getters: true } }
);


const ThoughtSchema = new Schema(
    //-- A root post/thought created by a user
    {
        text: {
            type: String,
            minlength: 1,
            maxlength: 280,
            required: 'ERROR: Text must be between 1 - 280 characters',
        },
        //-- Username of user that created thought
        username: {
            type: String,
            required: true,
            ref: 'User',
            field: 'username'
        },
        date_created: {
            type: Date,
            default: Date.now,
            get: date_creted_value => dateFormat(date_creted_value)
        },
        //-- reactions to thought
        reactions: [ReactionSceham]
    },
    { 
        toJSON: { virtuals: true, getters: true } 
    },
);


//-- virtual getting total comments
ThoughtSchema.virtual('reactionCount').get(function() {

    return this.reactions.length;
  });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
