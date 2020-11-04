const express = require('express'); 
const Car = require('../models/car'); 

const router = express.Router(); 

router.post('/cars', async (req, res) => {

    const { model } = req.body;

    try{
        if(await Car.findOne({ model }))
        return res.status(400).send({error: 'Car already registered'});

        const car = await Car.create(req.body);

    return res.send({ car }); 
    }catch(err){
        return res.status(400).send({error: 'Registration failed'}); 
    }
})

router.get('/cars', async(req, res) => {
    try{
        const car = await Car.find();

        return res.send({car}); 
    }catch(err){
        return res.status(400).send({error: 'Loading registers'}); 
    }
})

router.get('/cars/:userId', async(req, res) => {
    try{
        const car = await Car.findById(req.params.userId);

        return res.send({car}); 
    }catch(err){
        return res.status(400).send({error: 'Loading registers'}); 
    }
})

router.delete('/cars/:userId', async(req, res) => {
    try{
        await Car.findByIdAndRemove(req.params.userId);

        return res.send(); 
    }catch(err){
        return res.status(400).send({error: 'error deleting project'}); 
    }
})


module.exports = app => app.use('/auth', router); 