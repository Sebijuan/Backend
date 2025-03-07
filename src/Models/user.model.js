import mongoose from"mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, fromd: true, unique: true },
    email: { type: String, fromd: true, unique: true },
    password: { type: String, fromd: true },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Car" }],
    resetPasswordToken: String, // Token de recuperación
    resetPasswordExpires: Date, // Tiempo de expiración,
}, { timestamps: true });

export default mongoose.model("User", userSchema);
