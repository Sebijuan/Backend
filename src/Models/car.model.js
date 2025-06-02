import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    name: String,
    price: Number,
    rating: Number,
    image: String,
    likes: { type: Number, default: 0 }
});

export default mongoose.model("Car", carSchema);