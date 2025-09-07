import { Schema, model } from "mongoose";


const userSchema = new Schema({ 
    name:{
        type:String,
        required:true,
        maxLength:50
    },
    age:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
    }
    ,
    createdAt:{
        type:Date,
        default:Date.now
    }
})


const UserModel = model("User" ,userSchema );

export default UserModel;

// Step-2 Make models