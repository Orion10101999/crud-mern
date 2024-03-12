import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true,
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required :true,
    },
    mobile:{
        type:Number,
        required :true,
    },
    project:{
        type:String,
        required : true,
    }
},{timestamps:true})

const  User = mongoose.model('User',userSchema)

export default User