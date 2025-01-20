import mongoose from "mongoose";
import videoGameSchema from "./schemas/videoGameSchema.js";
const VideoGame = mongoose.model('VideoGame',videoGameSchema);

export default VideoGame;