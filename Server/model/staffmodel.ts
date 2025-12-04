import mongoose from 'mongoose';

const staffSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastname: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    pwd: { type: String, required: true },
})

const Staff = mongoose.model('Staff', staffSchema);

export default Staff;