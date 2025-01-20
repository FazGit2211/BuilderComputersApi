import mongoose from "mongoose";

const { Schema } = mongoose;

const videoGameSchema = new Schema({
    name:String,
    genred:String,
    year:Date
});

export default videoGameSchema;