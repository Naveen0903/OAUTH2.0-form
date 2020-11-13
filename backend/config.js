const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/loginsignup';
const MONGO_OPTIONS = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

var whitelist = ['http://localhost','http://localhost:3000', 'http://localhost:3000/*'];
var CORS_OPTIONS = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

module.exports = {
    MONGO_URL,
    MONGO_OPTIONS,
    CORS_OPTIONS
};