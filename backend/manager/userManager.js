const { user } = require("../models/users");
var { 
    encode,
    compareHash } =  require('../utils/encode');
var { generateToken } = require("../utils/auth");

const createUser = async (userInfo) => {
    try{
        if(userInfo.name && userInfo.email && userInfo.password){
            let query = user.findOne({email: userInfo.email});
            let userData = await query.exec();
            if(!userData){
                
                let userData = new user();

                userData.name = userInfo.name;
                userData.email = userInfo.email;
                userData.password = encode(userInfo.password);

                let newUser = await userData.save();
                let token = generateToken({name: newUser.name, email: newUser.email});
                return { user: newUser.email, token: token};
            }else{
                return { message: "User already exist" };
            }
        }
        return { message: "Missing required values" };
    }catch(err){
        return {error: err};
    }
}

const loginUser = async (userInfo) => {
    try {
        if(userInfo.email && userInfo.password){
            let query = user.findOne({email: userInfo.email});
            let userData = await query.exec();
            if(userData){
                let hashCheck = await compareHash(userInfo.password, userData.password);
                if(hashCheck){
                    let token = generateToken({name: userData.name, email: userData.email});
                    return { user: userData.email, token: token };
                }else {
                    return {message: "username/ password is incorrect"};
                }
            }else{
                return {message: "User does not exist"};
            }
        }
        return {message: "Missing required values"};
    }catch(err) {
        return {error: err};
    }
}

module.exports = {
    createUser,
    loginUser
};