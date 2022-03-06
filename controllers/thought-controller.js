//------------------------------------------------------------------------------
//-- Imports
const { Thought } = require('../models');

const thoughtController = {
    // /api/thoughts/
    getAllThoughts(req, res) {
        Thought.find({})
        .then(allThoughtsData => res.json(allThoughtsData))
        .catch(err => {console.log(err); res.sendStatus(400)});
    },
    // /api/thoughts/:id
    getThoughtById( { params }, res ) {
        Thought.findOne({ _id: params.id})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .then(allThoughtsData => res.json(allThoughtsData))
        .catch(err => res.sendStatus(400).json(err));
    },
    // /api/thoughts/
    createThought({ body }, res) {
        Thought.create(body)
        .then(allThoughtsData => res.json(allThoughtsData))
        .catch(err => {console.log(err); res.sendStatus(400)});
    },
    // /api/thoughts/:id
    updateThoughtById({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(allThoughtsData => res.json(allThoughtsData))
        .catch(err => {console.log(err); res.sendStatus(400)});
    },
    // /api/thoughts/:id
    deleteThoughtById({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(allThoughtsData => res.json(allThoughtsData))
        .catch(err => {console.log(err); res.sendStatus(400)});
    },
    // /api/thoughts/:thoughtId/reactions/:reactionId
    createReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            {   _id: params.thoughtId                 },
            {   $addToSet: { reactions: body._id }    },
            {   runValidators: true, new: true        }
        )
            .then(reactionAddedResponse => {
                //-- if no user associted, exit.
                if (!reactionAddedResponse) {return res.status(400).json({"message":`ERROR: No Thought associated to ID: ${params.thoughtId}`});};
                res.status(200).json(reactionAddedResponse)
            })
            .catch(err => {console.log(err); res.sendStatus(400)});
    },
    // /api/thoughts/:thoughtId/reactions/:reactionId
    deleteReactionById({ params }, res) {
        Thought.findOneAndUpdate(
            {   _id: params.userId                           },
            {   $pull: { reactions: params.reactionId }          },
            {   runValidators: true, new: true               }
        )
            .then(reactionAddedResponse => {
                //-- if no user associted, exit.
                if (!reactionAddedResponse) {return res.status(400).json({"message":`ERROR: No Thought associated to ID: ${params.thoughtId}`});};
                
                res.json(reactionAddedResponse);
            })
            .catch(err => {console.log(err); res.sendStatus(400)});
    },
};

//------------------------------------------------------------------------------
//-- Exports
module.exports = thoughtController;