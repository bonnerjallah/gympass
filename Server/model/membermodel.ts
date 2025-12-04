import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastname: { type: String, required: true },
    phonenumber: {type: Number, required: true },
    pwd: { type: String, required: true },
})

const Member = mongoose.model('Member', memberSchema);
export default Member;