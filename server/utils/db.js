const mongoose= require('mongoose');


// const URI="mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);

const URI=process.env.MONGODB_URI;
// importing link from env

const connectDB= async()=>{
try{
    await mongoose.connect(URI);
    console.log('connection successful to database');
}
catch(error){
    console.error(error);
    process.exit(0);
}
}

module.exports=connectDB;