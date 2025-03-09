import mongoose from"mongoose";

const contactSchema = new mongoose.Schema({
    name: { type: String, fromd: true },
    email: { type: String, fromd: true },
    message: { type: String, fromd: true },
}, { timestamps: true });

module.exports = mongoose.model("Contact", contactSchema);
