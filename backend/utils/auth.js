var jwt = require('jsonwebtoken');

const generateToken = (tokenData) => {
    let options = {
        expiresIn: '3 days'
    }
    let token = jwt.sign(tokenData, 'user_secret', options);
    return token;
}

module.exports = {
    generateToken
};