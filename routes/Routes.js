const express = require('express');
const router = express.Router();

let users = [];
let posts = [];

/* 
    CRUD functionalities
*/
router.get( '/', ( request, response ) => {
    response.status( 200 ).send( { users } );
})

// POST REGISTER
router.post( '/register' , ( req, res ) => {
    if( req.body.email && req.body.username && req.body.password  ){
        res.status( 201 ).send({ "message": "User has been successfully registered!" })
        users = [ ...users, req.body ];
    }else{
        res.status( 406 ).send({"error" : "Cannot create user"})
    }
    
    console.log(users)
});

//POST LOGIN
router.post( '/login' , ( req, res ) => {


    if( users.some( e => e.username == req.body.username && e.password == req.body.password)){
        res.status( 201 ).send({ "message": "logged in!" })

    }else{
        res.status( 406 ).send({"error" : "Invalid credentials"})
    }
});

// PUT - http://localhost:<PORT>/api/v1/tasks/:<id>
router.put( `/:id`, ( request, response ) => {
    const taskId = Number( request.params.id );
    
    const taskIndex = tasks.findIndex( task => task.id === taskId );
    tasks[ taskIndex ].status = 'Done';

    response.status( 200 ).send( { tasks: tasks } );
});

// DELETE - http://localhost:<PORT>/api/v1/tasks/:<id>
router.delete( `/:id`, ( request, response ) => {
    tasks = tasks.filter( task => task.id !== Number( request.params.id ) );
    response.status( 200 ).send( { tasks: tasks } );
})


// Export
module.exports = router;
