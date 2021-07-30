const User = require("../models/User");


User.insertMany(
    [
        {
            username: 'panda1',
            email: 'arnav1@gmail',
            password: 'sdf',
            avatar: 'lajsf',
            biography: 'asd',

        },
        {
            username: 'panda2',
            email: 'arnav2@gmail',
            password: 'sdf',
            avatar: 'lajsf',
            biography: 'asd',

        },
        {
            username: 'panda3',
            email: 'arnav3@gmail',
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