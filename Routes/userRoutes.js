const express = require("express")
const router = express.Router()
const user = require('../Schema/userSchema');

router.post('/addUser', async (req, res)=>{
    console.log("from the req in post api",req.body);
    const { userName } = req.body;
    try{
        const existingUser = await user.findOne({userName});

        if(existingUser){
            return res.json({
                message:"User already exists",
            });
        }
        else{
            const data = new user(req.body);
            const result = await data.save();

            if(result){
                res.json({
                    message:"Success",
                    id: result._id,
                });
            }
            else{
                res.json({
                    message:"Failure",
                })
            }
        }
    } catch(err){
        console.log("Error occurred in the API",err);
        res.json({
            message:"Failure",
        });
    }
});

router.get('/users', async(req,res)=>{
    const users =await user.find();
    if(users){
        res.json({
            users:users
        })
    }
    else{
        res.json({
            message:"no user found"
        })
    }
})

module.exports = router;