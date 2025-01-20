import mongoose from "mongoose";

 export default async function main() {
    await mongoose.connect('mongodb://localhost:27017/builder-pc');
}
