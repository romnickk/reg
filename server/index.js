const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./model/user')

const app = express();

app.use(cors(
    {
        origin: ["https://reg-client-mu.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
));
app.use(express.json());

mongoose.connect("mongodb+srv://romnick:1234@romnickdb.e14diyv.mongodb.net/reg")

app.post('/register', async(req,res)=>{
    const {name,username,password} = req.body;

    const user = await User.findOne({username})
    try {
        if(user){
        res.status(409).json({error: "User already exist"})
        }else{
        const saveUser = new User({name:name,username:username,password:password});
        await saveUser.save();
        }
    } catch (error) {
        
    }

    

})

const port = 3000;
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})
