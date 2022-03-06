//------------------------------------------------------------------------------
//-- Imports
const { User } = require('../models');

const userController = {

    getAllUsers(req, res) {
        User.find({})
        .then(allUsersData => res.json(allUsersData))
        .catch(err => json(err));
    },
    getUserById(req, res) {
        User.find({})
        .then(allUsersData => res.json(allUsersData))
        .catch(err => json(err));
    },
    createUser(req, res) {
        User.find({})
        .then(allUsersData => res.json(allUsersData))
        .catch(err => json(err));
    },
    updateUserById(req, res) {
        User.find({})
        .then(allUsersData => res.json(allUsersData))
        .catch(err => json(err));
    },
    deleteUserById(req, res) {
        User.find({})
        .then(allUsersData => res.json(allUsersData))
        .catch(err => json(err));
    },
};



//------------------------------------------------------------------------------
//-- Exports
module.exports = userController;
