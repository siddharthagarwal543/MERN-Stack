require("dotenv").config();

// for using env file


const express=require("express");
const app=express();
const authRoute=require("./router/auth-router");
const contactRoute=require("./router/contact-router")
const connectDB=require("./utils/db");
const errorMiddleware = require("./Middlewares/error-middleware");
const cors=require("cors");
const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}

app.use(cors(corsOptions));
app.use(express.json()); 
// Middleware for json handling

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);

app.use(errorMiddleware);
// This enables to use error middleware in any of our js files

const PORT=5000;



connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at PORT: ${PORT}`);  
    });
});

