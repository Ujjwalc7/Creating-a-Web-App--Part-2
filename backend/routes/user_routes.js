const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const UserModel = require('../models/user_model');



router.post('/registration',async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({error:'one or more feilds are empty'});
    }
    const userFound = await UserModel.findOne({email:email});
    if(userFound){
        return res.status(500).json({error:'user with this email already exists'});
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new UserModel({...req.body, password:hashPassword});
    const resp = await newUser.save();
    return res.status(200).json({message:'user registered successfully'});
    } catch (error) {
        console.log("error registering user: ", error);
        return res.status(500).json({error: "Internal server error"});
    }
});

router.post('/login',async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({error:'one or more feilds are empty'});
        }
        const userFound = await UserModel.findOne({email: email});
        if(!userFound){
            return res.status(401).json({message: 'Invalid credentials'});
        }
        const didMatch = await bcrypt.compare(password, userFound.password);
        if(!didMatch){
            return res.status(401).json({message: 'Invalid credentials'});
        }
        const jswToken = jwt.sign({_id: userFound._id}, JWT_SECRET);
        return res.status(200).json({result:{token: jswToken, user: userFound}});
    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
});

module.exports = router;