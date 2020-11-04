const express = require('express'); 
const User = require('../models/user'); 

const router = express.Router(); 

router.post('/register', async (req, res) => {

    const { email } = req.body;

    try{
        if(await User.findOne({ email }))
        return res.status(400).send({error: 'User already exists'});

        const user = await User.create(req.body);

    return res.send({ user }); 
    }catch(err){
        return res.status(400).send({error: 'Registration failed'}); 
    }
})

router.get('/register', async(req, res) => {
    try{
        const user = await User.find();

        return res.send({user}); 
    }catch(err){
        return res.status(400).send({error: 'Loading registers'}); 
    }
})

router.get('/register/:userId', async(req, res) => {
    try{
        const user = await User.findById(req.params.userId);

        return res.send({user}); 
    }catch(err){
        return res.status(400).send({error: 'Loading registers'}); 
    }
})

router.delete('/register/:userId', async(req, res) => {
    try{
        await User.findByIdAndRemove(req.params.userId);

        return res.send(); 
    }catch(err){
        return res.status(400).send({error: 'error deleting project'}); 
    }
})

router.put('/register/:userId', async (req, res) => {

    try{ 
        const user = await User.findByIdAndUpdate(req.params.userId,{new : true});

        return res.send({ user }); 
    }catch(err){
        return res.status(400).send({error: 'Registration failed'}); 
    }
})



module.exports = app => app.use('/auth', router); 