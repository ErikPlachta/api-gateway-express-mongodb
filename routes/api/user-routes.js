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
    .get(getAllPizza)
    .post(createPizza);
  
  // /api/pizzas/:id
  router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);
  
  module.exports = router;
  

//------------------------------------------------------------------------------
//-- Exports
module.exports = router;
