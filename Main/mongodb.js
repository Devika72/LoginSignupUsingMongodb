const mongoose=require("mongoose")
//connect the node to the mongodb database
mongoose.connect("mongodb://localhost:27017/LoginSignup")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("Failed to connect");
})

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

//define collection 
const collection=new mongoose.model("details",LoginSchema)
module.exports=collection