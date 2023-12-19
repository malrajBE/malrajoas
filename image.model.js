const mongoose=require('mongoose');
const { buffer } = require('stream/consumers');
const ImageSchema={
    name:{
        type:String
        
    },
image:{
data:Buffer,
ContentType:String
}
}
module.exports=ImageModel=mongoose.model("ImageModel",ImageSchema);
