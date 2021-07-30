require("../config/db.connection");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please Provide a Title."],
        },
        // user: {
        //     type: mongoose.Types.ObjectId,
        //     ref: "User",
        // },
        image: {
            type: String,
            require: true,
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
