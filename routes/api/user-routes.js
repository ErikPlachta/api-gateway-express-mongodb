//------------------------------------------------------------------------------
//-- Imports
const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
  } = require('../../controllers/user-controller');
  
  // /api/user
  router
    .route('/')
    .get(getAllUsers)
    .post(createUser)
  
  // /api/user/:id
  router
    .route('/:id')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

//------------------------------------------------------------------------------
//-- Exports
module.exports = router;
