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
        //-- Username of user that created thought
        username: {
            type: String,
            required: true,
            ref: 'User',
            field: 'username'
        },
        //-- reactions to thought
        reactions: [{
            documents: [{
                type: Schema.Types.ObjectId,
                ref: 'Reaction'
            }],
            user_ids: [{
                type: Schema.Types.ObjectId,
                ref: 'User'
            }]
        }]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        }
    }
);


const ReactionSceham = new Schema(
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
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);


//-- virtual getting total comments
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
