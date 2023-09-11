import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    id: { type: String, required: true},
    username: {type: String, required: true, unique:true},
    name: {type: String, required: true},
    image: String,
    bio: String,
    threads: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'thread'
        }
    ],
    onboarded: {
        type: Boolean,
        default : false,
    },
    communities: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'community'
        }
    ]
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;