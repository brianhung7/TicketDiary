require("../config/db.connection");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please Provide An Email Address."],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please Provide A Password"],
        },
        username: { type: String, required: true, unique: true },
        avatar: {
            type: String,
            default:
                "https://i.pinimg.com/originals/5f/a8/ef/5fa8ef8001f91d2c4d9f9b68b87dcf0d.jpg",
        },
        biography: {
            type: String,
        },
        //only here for seeding, COMMENT OUT AFTER
        // _id: {
        //     type: String,
        // }
    },

    {
        timestamps: true,
        //only here for seeding, COMMENT OUT AFTER
        //  _id: false, 
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
