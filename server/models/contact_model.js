const mongooes=require("mongoose")


const contactSchema=new mongooes.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true}
})

const contact=new mongooes.model("Contact",contactSchema)
module.exports=contact;