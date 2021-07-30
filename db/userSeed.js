const User = require("../models/User");


User.insertMany(
    [
        {
            username: 'panda',
            email: 'arnav@gmail',
            password: 'sdf',
            avatar: 'lajsf',
            biography: 'asd',

        },
        {
            username: 'panda',
            email: 'arnav@gmail',
            password: 'sdf',
            avatar: 'lajsf',
            biography: 'asd',

        },
        {
            username: 'panda',
            email: 'arnav@gmail',
            password: 'sdf',
            avatar: 'lajsf',
            biography: 'asd',

        },
    ],
    function (error, createdPosts) {
        if (error) return console.log(error);
        console.log("SEED COMPLETE");
        console.log(createdPosts);

    }
)