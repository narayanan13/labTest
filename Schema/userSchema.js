const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    sex:{
        type:String,
        required:true,
    }
})