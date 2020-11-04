const mongoose = require('mongoose'); 

mongoose.connect('mongodb+srv://jmgcorreia99:12345@cluster0-qtlch.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise; 

module.exports = mongoose; 