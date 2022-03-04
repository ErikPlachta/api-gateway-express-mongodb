//------------------------------------------------------------------------------
//-- Imports
const router = require('express').Router();

const userRoutes = require('./user-routes');
const reactionRoutes = require('./reaction-routes');
const thoughtRoutes = require('./thought-routes');



//------------------------------------------------------------------------------
//-- Routing

router.use('/users', userRoutes);
router.use('/reactions', reactionRoutes);
router.use('/thoughts', thoughtRoutes);


//-- if gets here when rounting, throw 404
router.use((req, res) => {
    // console.log(`//-- Calling a ${req.method} in controllers/api/index.js`);
    res.status(404).json({
      request: {
        method: req.method,
        params: req.params,
        // body: req.body,
        path: "./api",
      },
      response: {
        status: 404,
        message: "API rquest failure. Page not found."
  
      }
    })
    .end();
    
  });

//-- Exporting express router with api routes up to ../index.js
module.exports = router;