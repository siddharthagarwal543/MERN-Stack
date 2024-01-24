// We are using Express Js for error Handling

const errorMiddleware=(err,req,res,next)=>{
    const status=err.status || 500;
    const message=err.message || "BACKEND ERROR";
    const errorDetails= err.extraDetails || "Error from Backend";

    return res.status(status).json({message,errorDetails});
}


module.exports=errorMiddleware;