//------------------------------------------------------------------------------
//-- Imports
const { User } = require('../models');

const userController = {

    getAllUsers(req, res) {
        User.find({})
        .then(allUsersData => res.json(allUsersData))
        .populate(
            {
                path: 'thoughts',
                select: '-__v'
            },
            {
                path: 'friends',
                select: '-__v'
            }
        )
        .catch(err => res.sendStatus(400).json(err));
    },
    getUserById( { params }, res ) {
        User.findOne({ __id: params.id })
        .populate(
            {
                path: 'thoughts',
                select: '-__v'
            },
            {
                path: 'friends',
                select: '-__v'
            }
        )
        .then(allUsersData => res.json(allUsersData))
        .catch(err => res.sendStatus(400).json(err));
    },
    createUser({ body }, res) {
        User.create(body)
        .then(allUsersData => res.json(allUsersData))
        .catch(err => res.sendStatus(400).json(err));
    },
    updateUserById(req, res) {
        User.find({})
        .then(allUsersData => res.json(allUsersData))
        .catch(err => res.sendStatus(400).json(err));
    },
    deleteUserById(req, res) {
        User.find({})
        .then(allUsersData => res.json(allUsersData))
        .catch(err => res.sendStatus(400).json(err));
    },
};

//------------------------------------------------------------------------------
//-- Exports
module.exports = userController;
