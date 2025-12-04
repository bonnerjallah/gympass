import mongoose from "mongoose";

const trainersSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastname: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    pwd: { type: String, required: true },
})

const Trainer = mongoose.model('Trainer', trainersSchema);
export default Trainer;