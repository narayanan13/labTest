const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://narayananofficial13:nk1307@cluster0.sbnrmq8.mongodb.net/expirator').then(()=>{
    console.log('DB connection Successful!');
}).catch((e)=>{
    console.log('Error occurred in DB connection!', e);
})

