import mongoose from 'mongoose';


const RoomSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    decs:{
        type:String,
        require:true
    },
    maxPeople:{
        type:Number,
        require:true
    },
    roomNumbers:[{number:Number,unavailableDates:{type:[Date]}}],

})

export default mongoose.model("Room",RoomSchema)