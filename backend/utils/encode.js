const bcrypt = require('bcrypt');

const saltRounds = 10;

const encode = (password) => {
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}

const compareHash = async (password, hash) => {
    let hashCheck = await bcrypt.compare(password, hash);
    return hashCheck;
}

module.exports = {
    encode,
    compareHash
};