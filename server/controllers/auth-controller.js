const user=require("../models/user_model")
const bcrypt=require("bcrypt")

const home=async(req,res)=>{
try{
res.status(200).send("Home!");
}
catch(error){
console.log(error);
}
};
// let userCreated;
const register=async(req,res)=>{
    try{
        console.log(req.body)
        // Get registration data
        const {username,email,phone,password}=req.body;

        const UserExist=await user.findOne({email:email});
        if(UserExist)
        {res.status(400).send({"message":"User Exist"});}
        else{
        //     const saltRound=10;
        // const hash_password=await becrypt.hash(password,saltRound);
        const userCreated=await user.create({username,email,phone,password});
        res.status(200).json({msg:userCreated, 
            token: await userCreated.generateToken(),
            userId:userCreated._id.toString()
        });
        }
        
    }
    catch(error){
        // console.log(error);
        // res.status(500).send({msg:"Page not found"})
        next(error);
    }
};

const login=async(req,res,next)=>{
try{
const {email,password}=req.body;
const UserExist = await user.findOne({email});
if(!UserExist){
    const status=400;
    const message="Invalid Credintials";
    const error={
        status,
        message
    }
    next(error);
    // return res.status(400).json({message:"Invalid Credintials"});
    return;
}
// const isPasswordValid=await bcrypt.compare(password,UserExist.password);
const isPasswordValid=await UserExist.comparePassword(password);
if(isPasswordValid){
    res.status(200).json({msg:"Login Successful", 
    token: await UserExist.generateToken(),
    userId:UserExist._id.toString()
    });
}
else{
    const status=401;
    const message="Invalid Email or Password";
    const error={
        status,
        message
    }
    next(error);
    // res.status(401).json({message:"Invalid Email or Password"});
}
}
catch(error){
    console.log(error);
    const status=500;
    const message="Internal server error";
    const errorDetails={
        status,
        message
    }
    next(errorDetails);
    // res.status(500).json("Internal server error");
}
}

module.exports={home,register,login};