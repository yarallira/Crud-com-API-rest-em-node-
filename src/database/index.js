const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/yara', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;