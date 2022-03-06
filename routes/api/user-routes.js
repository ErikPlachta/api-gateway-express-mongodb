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
  
  // /api/pizzas
  router
    .route('/')
    .get(getAllUsers)
    .post(createUser)
  
  // /api/pizzas/:id
  router
    .route('/:id')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);
  
  module.exports = router;
  

//------------------------------------------------------------------------------
//-- Exports
module.exports = router;
