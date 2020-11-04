const mongoose = require('../database'); 

const CarSchema = new mongoose.Schema({
    model:{
        type: String, 
        required: true,
    }, 
    category:{
        type: String, 
        unique: true, 
        required: true, 
        lowercase: true, 
    }, 
    licensePlate:{
        type: String, 
        required: true, 
        select: false, 
    },
    info:{
        type: String, 
        required: true, 
    },
    available:{
        type: String, 
        required: true, 
    }, 
    createdAt:{
        type: Date, 
        default: Date.now, 
    },
});

const Car = mongoose.model('Car', CarSchema); 

module.exports = Car; 