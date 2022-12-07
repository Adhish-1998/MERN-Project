const userModel = require('../models/userModel')

const register = async (req,res)=> {
    let data = await userModel.create(req.body)
    res.send(data)
}

const login = async (req,res)=> {
    if(req.body.email && req.body.password){
        let user = await userModel
        .findOne(req.body)
        .select('-password')
     if(user) return res.send(user)
     if(!user) return res.send({result : "No User Found !!!"})
    
    }
    return res.send("Email or Password is missing !!!")
}

module.exports = {
    register,
    login
}