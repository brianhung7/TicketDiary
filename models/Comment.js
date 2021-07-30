// require mongoose
const mongoose = require("mongoose");
// set up schema
const ComentSchema = new mongoose.Schema(
    {

        content: {
            type: String,

        },
        post: {
            type: mongoose.Types.ObjectId,
            ref: "Post",
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    },
    { timestamps: true }
);

// use schema in model
const Comment = mongoose.model("Review", CommentSchema);
// export out model
module.exports = Comment;
