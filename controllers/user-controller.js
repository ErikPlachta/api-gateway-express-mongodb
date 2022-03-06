//------------------------------------------------------------------------------
//-- Imports
const { User } = require('../models');

const userController = {

    getAllUsers(req, res) {
        User.find({})
        .then(allUsersData => res.json(allUsersData))
        .catch(err => {console.log(err); res.sendStatus(400)});
    },
    getUserById( { params }, res ) {
        User.findOne({ __id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .then(allUsersData => res.json(allUsersData))
        .catch(err => res.sendStatus(400).json(err));
    },
    createUser({ body }, res) {
        User.create(body)
        .then(allUsersData => res.json(allUsersData))
        .catch(err => {console.log(err); res.sendStatus(400)});
    },
    updateUserById(req, res) {
        User.find({})
        .then(allUsersData => res.json(allUsersData))
        .catch(err => {console.log(err); res.sendStatus(400)});
    },
    deleteUserById(req, res) {
        User.find({})
        .then(allUsersData => res.json(allUsersData))
        .catch(err => {console.log(err); res.sendStatus(400)});
    },
};

//------------------------------------------------------------------------------
//-- Exports
module.exports = userController;
