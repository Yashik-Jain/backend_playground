import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import { type } from "os";


const commentschema = new Schema({
    content:{
        type:String,
        required:true
    },
    Video:{
        type:Schema.Types.ObjectId,
        ref:"Video"
    },
    owner:{
    type:Schema.Types.ObjectId,
    ref:"VidUsereo"
    },
})

videoSchema.plugin(mongooseAggregatePaginate)

export const Comment = mongoose.model("Comment",commentschema)