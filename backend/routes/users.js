var express = require('express');
var router = express.Router();

var userManager = require("../manager/userManager");

router.post('/signup', async function(req, res) {
  try{
    let userInfo = req.fields;
    let data = await userManager.createUser(userInfo);
    res.send({status: 200, data: data});
  }catch(err){
    res.send({status: 400, message: "Something went wrong"});
  }
});

router.post('/login', async function(req, res) {
  try{
    let userInfo = req.fields;
    let data = await userManager.loginUser(userInfo);
    res.send({status: 200, data: data});
  }catch(err){
    res.send({status: 400, message: "Something went wrong"});
  }
});

module.exports = router;
