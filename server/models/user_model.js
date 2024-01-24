const mongoose=require("mongoose");
const becrypt=require("bcrypt")
// For encrypting password - bcrypt

const jwt=require('jsonwebtoken');
// For authentication and authorization

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})



// Secure The password
userSchema.pre("save",async function(next){
    const user=this;
    if(!user.isModified("password")){
        next();
    }
    try{
        const saltRound=await becrypt.genSalt(10);
        const hash_password=await becrypt.hash(user.password,saltRound);
        user.password=hash_password;
    }
    catch(error){
        next(error);
    }
})



// json web token: for authorization and authentication
userSchema.methods.generateToken = async function(){
try{
return jwt.sign({
    userId:this._id.toString(),
    email:this.email,
    isAdmin:this.isAdmin,
},
process.env.JWT_SECRET_KEY,
{
    expiresIn:"30d",
})
}
catch(error){

}
};

// Compare the password
userSchema.methods.comparePassword=async function(password){
   return becrypt.compare(password,this.password);
}




const User=new mongoose.model("User",userSchema);
module.exports=User;



